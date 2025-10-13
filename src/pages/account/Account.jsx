import React, { useContext, useState, useEffect } from "react"
import { Context } from "../../context/Context"
import "./account.css"
import { IoIosAddCircleOutline } from "react-icons/io"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { toast } from 'react-toastify'

export const Account = () => {
  const { user, dispatch } = useContext(Context)

  // Form states
  const [file, setFile] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  
  // UI states
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  

  const [errors, setErrors] = useState({})

  
  useEffect(() => {
    if (user) {
      setUsername(user.username || "")
      setEmail(user.email || "")
    }
  }, [user])

  
  
  const validateUsername = (value) => {
    const trimmed = value.trim()
    if (!trimmed) {
      return "Username is required"
    }
    if (trimmed.length < 3) {
      return "Username must be at least 3 characters long"
    }
    if (trimmed.length > 20) {
      return "Username must not exceed 20 characters"
    }
    if (!/^[a-zA-Z0-9_]+$/.test(trimmed)) {
      return "Username can only contain letters, numbers, and underscores"
    }
    return ""
  }

  const validateEmail = (value) => {
    const trimmed = value.trim()
    if (!trimmed) {
      return "Email is required"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmed)) {
      return "Please enter a valid email address (e.g., user@example.com)"
    }
    return ""
  }

  const validatePassword = (value) => {
    if (!value) return "" 
    
    if (value.length < 8) {
      return "Password must be at least 8 characters long"
    }
    if (!/(?=.*[a-z])/.test(value)) {
      return "Password must contain at least one lowercase letter"
    }
    if (!/(?=.*[A-Z])/.test(value)) {
      return "Password must contain at least one uppercase letter"
    }
    if (!/(?=.*\d)/.test(value)) {
      return "Password must contain at least one number"
    }
    if (!/(?=.*[!@#$%^&*(),.?":{}|<>])/.test(value)) {
      return "Password must contain at least one special character (!@#$%^&*)"
    }
    return ""
  }

  const validateCurrentPassword = (value) => {
    if (!value || value.trim() === "") {
      return "Current password is required to update your profile"
    }
    
    return ""
  }

  const validateConfirmPassword = (newPass, confirmPass) => {
    if (newPass && !confirmPass) {
      return "Please confirm your new password"
    }
    if (newPass && confirmPass && newPass !== confirmPass) {
      return "Passwords do not match"
    }
    return ""
  }

  
  const getPasswordChecks = (pwd) => {
    return {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
    }
  }

  const isPasswordStrong = (pwd) => {
    const checks = getPasswordChecks(pwd)
    return Object.values(checks).every(Boolean)
  }

  // Full form validation
  const validateForm = () => {
    const newErrors = {}
    
    // Username validation
    const usernameError = validateUsername(username)
    if (usernameError) newErrors.username = usernameError

    // Email validation
    const emailError = validateEmail(email)
    if (emailError) newErrors.email = emailError

    // Current password validation (always required)
    const currentPasswordError = validateCurrentPassword(currentPassword)
    if (currentPasswordError) newErrors.currentPassword = currentPasswordError

    // New password validation (only if user wants to change it)
    if (password) {
      const passwordError = validatePassword(password)
      if (passwordError) newErrors.password = passwordError

      const confirmPasswordError = validateConfirmPassword(password, confirmPassword)
      if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }


  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return


    if (!selectedFile.type.startsWith('image/')) {
      toast.error('Please select a valid image file (JPG, PNG, GIF, etc.)')
      return
    }


    const maxSize = 2 * 1024 * 1024 
    if (selectedFile.size > maxSize) {
      toast.error('Image size must be less than 2MB. Please choose a smaller image.')
      return
    }
    
    setFile(selectedFile)
    

    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImage(reader.result)
    }
    reader.onerror = () => {
      toast.error('Failed to read image file. Please try again.')
    }
    reader.readAsDataURL(selectedFile)
  }


  
  const handleEdit = () => {
    setUsername(user.username || "")
    setEmail(user.email || "")
    setPassword("")
    setConfirmPassword("")
    setCurrentPassword("")
    setFile(null)
    setPreviewImage(null)
    setErrors({})
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setErrors({})
    setFile(null)
    setPreviewImage(null)
    setPassword("")
    setConfirmPassword("")
    setCurrentPassword("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    

    if (!validateForm()) {
      toast.error('Please fix all errors before submitting')
      return
    }

    setLoading(true)
    dispatch({ type: "UPDATE_START" })

    try {
     
      await new Promise(resolve => setTimeout(resolve, 1500))

  
      const updatedUser = {
        ...user,
        username: username.trim(),
        email: email.trim(),
      }

  
      if (file && previewImage) {
        updatedUser.profilePic = previewImage
        localStorage.setItem(`profilePic_${updatedUser.email}`, previewImage)
      }


      if (password.trim()) {
   
        localStorage.setItem(`password_${updatedUser.email}`, password)
      }

      
      localStorage.setItem("user", JSON.stringify(updatedUser))
      

      dispatch({ type: "UPDATE_SUCC", payload: updatedUser })
      

      window.dispatchEvent(new CustomEvent('profilePictureUpdated', {
        detail: { profilePic: updatedUser.profilePic }
      }))
      
      toast.success('Profile updated successfully!')
      

      setTimeout(() => {
        setIsEditing(false)
        setLoading(false)
        setErrors({})
        setPassword("")
        setConfirmPassword("")
        setCurrentPassword("")
        setFile(null)
        setPreviewImage(null)
      }, 1000)

    } catch (error) {
      console.error('Update error:', error)
      dispatch({ type: "UPDATE_FAILED" })
      
      // Show specific error message
      if (error.response?.data?.message) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Failed to update profile. Please check your connection and try again.')
      }
      
      setLoading(false)
    }
  }


  
  const getProfilePicture = () => {
    if (user?.profilePic) {
      return user.profilePic
    }
    const storedPic = localStorage.getItem(`profilePic_${user?.email}`)
    if (storedPic) {
      return storedPic
    }
    return "https://www.blookup.com/static/images/single/profile-1.edaddfbacb02.png"
  }


  
  if (!user) {
    return (
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Please login to view your account</h1>
        </div>
      </section>
    )
  }


  
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            {/* LEFT SIDE - PROFILE PICTURE */}
            <div className='left'>
              <div className='img flexCenter' style={{ position: 'relative' }}>
                <img 
                  src={previewImage || getProfilePicture()} 
                  alt='Profile' 
                  style={{ 
                    width: '150px', 
                    height: '150px', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '3px solid #f01b89'
                  }} 
                />
                {isEditing && (
                  <>
                    <label 
                      htmlFor='inputfile' 
                      title="Upload profile picture"
                      style={{ 
                        position: 'absolute', 
                        bottom: '10px', 
                        right: '10px',
                        cursor: 'pointer',
                        background: '#fff',
                        borderRadius: '50%',
                        padding: '5px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                      }}
                    >
                      <IoIosAddCircleOutline 
                        className='icon' 
                        style={{ fontSize: '2rem', color: '#f01b89' }} 
                      />
                    </label>
                    <input 
                      type='file' 
                      id='inputfile' 
                      accept="image/*"
                      style={{ display: "none" }} 
                      onChange={handleFileChange}
                      disabled={loading}
                    />
                  </>
                )}
              </div>
              {isEditing && file && (
                <p style={{ 
                  textAlign: 'center', 
                  marginTop: '10px', 
                  fontSize: '0.9rem',
                  color: '#0472f8',
                  fontWeight: '500'
                }}>
                  ✓ New image selected
                </p>
              )}
            </div>
            
            {/* RIGHT SIDE - USER INFO / EDIT FORM */}
            {!isEditing ? (
         
              <div className='right'>
                <div className='profile-info' style={{
                  background: 'linear-gradient(135deg, #f5b8d9, #bdd9f9)',
                  borderRadius: '8px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  padding: '2.5rem 2rem',
                  marginBottom: '2rem',
                  minWidth: '320px',
                  maxWidth: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '1.5rem',
                  border: '1px solid #e3e8ee',
                }}>
                  <div style={{ fontSize: '1.2rem', color: '#222', letterSpacing: '0.01em' }}>
                    <span style={{ fontWeight: 600, marginRight: 8, color: '#f01b89' }}>Username:</span>
                    <span style={{ color: '#0472f8', fontWeight: 500 }}>{user.username}</span>
                  </div>
                  <div style={{ fontSize: '1.2rem', color: '#222', letterSpacing: '0.01em', wordBreak: 'break-all' }}>
                    <span style={{ fontWeight: 600, marginRight: 8, color: '#f01b89' }}>Email:</span>
                    <span style={{ color: '#0472f8', fontWeight: 500 }}>{user.email}</span>
                  </div>
                </div>
                <button
                  className='button'
                  onClick={handleEdit}
                  type='button'
                  style={{
                    background: 'linear-gradient(90deg, #f01b89, #1e7df2)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.85rem 2.2rem',
                    fontWeight: 700,
                    fontSize: '1.08rem',
                    cursor: 'pointer',
                    marginTop: '0.7rem',
                    boxShadow: '0 2px 8px rgba(37,99,235,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              // EDIT MODE
              <form className='right' onSubmit={handleSubmit}>
                {/* USERNAME FIELD */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='username' style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                    Username *
                  </label>
                  <input
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value)
                      if (errors.username) {
                        setErrors({ ...errors, username: '' })
                      }
                    }}
                    onBlur={() => {
                      const error = validateUsername(username)
                      if (error) setErrors({ ...errors, username: error })
                    }}
                    placeholder='Enter your username'
                    style={{ 
                      borderColor: errors.username ? '#ff4444' : '#ddd',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid'
                    }}
                    disabled={loading}
                  />
                  {errors.username && (
                    <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}>
                      ⚠️ {errors.username}
                    </span>
                  )}
                </div>

                {/* EMAIL FIELD */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='email' style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                    Email *
                  </label>
                  <input
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) {
                        setErrors({ ...errors, email: '' })
                      }
                    }}
                    onBlur={() => {
                      const error = validateEmail(email)
                      if (error) setErrors({ ...errors, email: error })
                    }}
                    placeholder='Enter your email'
                    style={{ 
                      borderColor: errors.email ? '#ff4444' : '#ddd',
                      width: '100%',
                      padding: '10px',
                      borderRadius: '4px',
                      border: '1px solid'
                    }}
                    disabled={loading}
                  />
                  {errors.email && (
                    <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}>
                      ⚠️ {errors.email}
                    </span>
                  )}
                </div>

                {/* CURRENT PASSWORD FIELD */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='currentPassword' style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                    Current Password *
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id='currentPassword'
                      type={showCurrentPassword ? 'text' : 'password'}
                      value={currentPassword}
                      onChange={(e) => {
                        setCurrentPassword(e.target.value)
                        if (errors.currentPassword) {
                          setErrors({ ...errors, currentPassword: '' })
                        }
                      }}
                      placeholder='Enter current password to verify'
                      style={{ 
                        borderColor: errors.currentPassword ? '#ff4444' : '#ddd',
                        width: '100%',
                        padding: '10px 40px 10px 10px',
                        borderRadius: '4px',
                        border: '1px solid'
                      }}
                      disabled={loading}
                    />
                    <button
                      type='button'
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      title={showCurrentPassword ? 'Hide password' : 'Show password'}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {showCurrentPassword ? 
                        <AiFillEyeInvisible size={20} color="#666" /> : 
                        <AiFillEye size={20} color="#666" />
                      }
                    </button>
                  </div>
                  {errors.currentPassword && (
                    <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}>
                      ⚠️ {errors.currentPassword}
                    </span>
                  )}
                  <span style={{ fontSize: '0.8rem', color: '#666', marginTop: '5px', display: 'block' }}>
                    Required for security verification
                  </span>
                </div>

                {/* NEW PASSWORD FIELD */}
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor='password' style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                    New Password (Optional)
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        if (errors.password) {
                          setErrors({ ...errors, password: '' })
                        }
                      }}
                      placeholder='Leave blank to keep current password'
                      style={{ 
                        borderColor: errors.password ? '#ff4444' : '#ddd',
                        width: '100%',
                        padding: '10px 40px 10px 10px',
                        borderRadius: '4px',
                        border: '1px solid'
                      }}
                      disabled={loading}
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? 'Hide password' : 'Show password'}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '5px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {showPassword ? 
                        <AiFillEyeInvisible size={20} color="#666" /> : 
                        <AiFillEye size={20} color="#666" />
                      }
                    </button>
                  </div>
                  {errors.password && (
                    <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}>
                      ⚠️ {errors.password}
                    </span>
                  )}
                  
                  {/* PASSWORD STRENGTH INDICATOR */}
                  {password && (
                    <div style={{
                      marginTop: '10px',
                      padding: '12px',
                      background: '#f8f9fa',
                      borderRadius: '5px',
                      fontSize: '0.85rem',
                      border: '1px solid #e9ecef'
                    }}>
                      <p style={{ fontWeight: '600', marginBottom: '10px', color: '#333' }}>
                        Password Requirements:
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {Object.entries({
                          length: 'At least 8 characters',
                          uppercase: 'One uppercase letter (A-Z)',
                          lowercase: 'One lowercase letter (a-z)',
                          number: 'One number (0-9)',
                          special: 'One special character (!@#$%^&*)'
                        }).map(([key, label]) => {
                          const checks = getPasswordChecks(password)
                          return (
                            <span 
                              key={key}
                              style={{ 
                                color: checks[key] ? '#28a745' : '#dc3545',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px'
                              }}
                            >
                              <span style={{ fontSize: '1rem' }}>
                                {checks[key] ? '✅' : '❌'}
                              </span>
                              {label}
                            </span>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* CONFIRM PASSWORD FIELD */}
                {password && (
                  <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor='confi7rmPassword' style={{ fontWeight: '600', marginBottom: '5px', display: 'block' }}>
                      Confirm New Password *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        id='confirmPassword'
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value)
                          if (errors.confirmPassword) {
                            setErrors({ ...errors, confirmPassword: '' })
                          }
                        }}
                        placeholder='Re-enter your new password'
                        style={{ 
                          borderColor: errors.confirmPassword ? '#ff4444' : (confirmPassword && password === confirmPassword ? '#28a745' : '#ddd'),
                          width: '100%',
                          padding: '10px 40px 10px 10px',
                          borderRadius: '4px',
                          border: '2px solid'
                        }}
                        disabled={loading}
                      />
                      <button
                        type='button'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        title={showConfirmPassword ? 'Hide password' : 'Show password'}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '5px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        {showConfirmPassword ? 
                          <AiFillEyeInvisible size={20} color="#666" /> : 
                          <AiFillEye size={20} color="#666" />
                        }
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <span style={{ color: '#ff4444', fontSize: '0.85rem', marginTop: '5px', display: 'block' }}>
                        ⚠️ {errors.confirmPassword}
                      </span>
                    )}
                    {confirmPassword && password === confirmPassword && !errors.confirmPassword && (
                      <span style={{ color: '#28a745', fontSize: '0.85rem', marginTop: '5px', display: 'block', fontWeight: '500' }}>
                        ✓ Passwords match
                      </span>
                    )}
                  </div>
                )}

                {/* SUBMIT BUTTONS */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <button 
                    className='button' 
                    type='submit'
                    disabled={loading}
                    style={{
                      background: loading ? '#ccc' : 'linear-gradient(90deg, #f01b89, #1e7df2)',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      padding: '12px 24px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff',
                      flex: 1
                    }}
                  >
                    {loading ? (
                      <>
                        <span className="spinner" style={{
                          width: '16px',
                          height: '16px',
                          border: '2px solid #fff',
                          borderTop: '2px solid transparent',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></span>
                        Updating...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                  <button 
                    className='button' 
                    type='button' 
                    onClick={handleCancel}
                    disabled={loading}
                    style={{
                      background: '#6c757d',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      padding: '12px 24px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      border: 'none',
                      borderRadius: '4px',
                      color: '#fff',
                      flex: 1
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}