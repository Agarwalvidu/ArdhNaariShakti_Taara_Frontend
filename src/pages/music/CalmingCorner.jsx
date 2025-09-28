
import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import './calmingCorner.css';

const audioData = {
  '🎶 Bollywood Soul': [
    { name: 'Ek Zindagi', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294975/Ek_Zindagi_Meri_128-_PagalWorld.Org.Im_hrasx6.mp3' },
    { name: 'Zindagi Kuch Toh Bata Reprise', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294940/Zindagi_Kuch_Toh_Bata_Reprise_Full_AUDIO_Song___Salman_Khan_rtbys4.mp3' },
    { name: 'Chak Lein De', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294939/Full_Video___Chak_Lein_De____Chandni_Chowk_To_China___Akshay_Kumar_lhyhbj.mp3' },
    { name: 'Ik Junoon', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294936/Ik_Junoon_Paint_it_red_Full_Song_Zindagi_Na_Milegi_Dobara___Hrithik_yhgzpt.mp3' },
    { name: 'Zinda', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294915/Zinda_Lyric_Video___Bhaag_Milkha_Bhaag_Farhan_Akhtar_Siddharth_qcqwxd.mp3' },
    { name: 'Yun Hi Chala Chal', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294908/Yun_Hi_Chala_Chal_Full_Song___Swades___Shahrukh_Khan_128k_xm99gg.mp3' },
    { name: 'Tu Na Jaane Aas Paas Hai Khuda', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294892/_Tu_Na_Jaane_Aas_Paas_Hai_Khuda__Full_HD_Song___Anjaana_Anjaani_wdjlev.mp3' },
    { name: 'Kun Faya Kun', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294873/Kun_Faya_Kun_Full_Video_Song_Rockstar___Ranbir_Kapoor___A_R__Rahman_lvbxpr.mp3' },
    { name: 'Pankhon Ko', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294870/Pankhon_Ko___Full_Song___Rocket_Singh___Salesman_Of_The_Year___m8xukq.mp3' },
    { name: 'Sapnon Se Bhare Naina', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294845/Sapnon_se_Bhare_Naina_-_Luck_by_Chance_-_OST_128k_sgbmdg.mp3' },
    { name: 'Kar Har Maidan Fateh', src: 'https://res.cloudinary.com/duqownjat/video/upload/v1754288702/kar-har-maidan-fateh__motivatorindia.in_odvx8z.mp3' },
  ],
  '🔥 Motivational Beats': [
    { name: 'Aashayein', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294800/Aashayein_Iqbal___KK___Shreyas_Talpade__Naseeruddin_Shah__Shweta_tpcpnc.mp3' },
    { name: 'Lakshya', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294788/Lakshya_Full_Video_Title_Track_Hrithik_Roshan_Shankar_Ehsaan_Loy_Javed_jrfkl9.mp3' },
    { name: 'Apna Time Aayega', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294744/Apna_Time_Aayega___Gully_Boy___Ranveer_Singh___Alia_Bhatt___DIVINE_txhkrd.mp3' },
    { name: 'Toofan Aalaya', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294725/Toofan_Aalaya_Song___Satyamev_Jayate_Water_Cup_Anthem___Eng_Subtitles_d5selh.mp3' },
    { name: 'Jhuk Na Paunga', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754294707/Full_Video__Jhuk_Na_Paunga_Song___RAID___Ajay_Devgn___Ileana_D_Cruz_i9v5wm.mp3' },
  ],
  '🧘‍♂️ Meditation Tracks': [
    { name: 'Instrumental Bliss', url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754296600/meditation-instrumental-example.mp3' },
    ...Array.from({ length: 50 }, (_, i) => ({
      name: `Meditation Track ${i + 1}`,
      url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${(i % 16) + 1}.mp3`,
    })),
  ],
'🙏 Devotional Soundscapes': [
  {
    name: 'Radhe Albeli Sarkar',
    url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754314575/Radhe_Albeli_Sarkar-128kbps_rlqoui.mp3',
  },
  {
    name: 'Jaikal Mahakal',
    url: 'https://res.cloudinary.com/duqownjat/video/upload/v1754314597/Jaikal_Mahakal-320kbps_qq7skm.mp3',
  },
],




  '🌙 Sleep Soundscapes': Array.from({ length: 50 }, (_, i) => ({
    name: `Sleep Track ${i + 1}`,
    url: `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${((i + 5) % 16) + 1}.mp3`,
  })),
};

const CalmingCorner = () => {
  const [search, setSearch] = useState('');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const audioRefs = useRef({});

  const handlePlay = (key) => {
    if (currentAudio && currentAudio !== audioRefs.current[key]) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    const selectedAudio = audioRefs.current[key];
    if (selectedAudio) {
      selectedAudio.play();
      setCurrentAudio(selectedAudio);
    }
  };

  const toggleShowMore = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const renderAudioList = (category, tracks) => {
    const filtered = tracks.filter(track =>
      track.name.toLowerCase().includes(search.toLowerCase())
    );

    const isExpanded = expandedCategories[category];
    const visibleTracks = isExpanded ? filtered : filtered.slice(0, 6);

    return (
      <div key={category}>
        <h3 className="category-title">{category}</h3>
        <div className="track-grid">
  
                {visibleTracks.map((track) => {
  const trackKey = `${category}-${track.name}`;
  return (
    <div className="track-item" key={trackKey}>
      <strong>{track.name}</strong>
      {track.url || track.src ? (
        <audio
          controls
          preload="metadata"
          ref={(el) => (audioRefs.current[trackKey] = el)}
          onPlay={() => handlePlay(trackKey)}
        >
          <source src={track.url || track.src} type="audio/mpeg" />
        </audio>
      ) : track.embed ? (
        <iframe
          title={track.name}
          allow="autoplay"
          frameBorder="0"
          width="100%"
          height="80"
          src={`https://player.cloudinary.com/embed/?cloud_name=duqownjat&public_id=${track.embed}&profile=cld-default`}
        ></iframe>
      ) : null}
      </div>
  
  );
})}

        </div>
        {filtered.length > 6 && (
          <div className="show-more" onClick={() => toggleShowMore(category)}>
            {isExpanded ? 'Show Less' : 'Show More'}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="calming-container">
      <div className="header">
        <div style={{ fontSize: '2.5rem' }}>🎵</div>
        <h1>🧘‍♀️ Calming Corner</h1>
        <p className="subheading">
          Enjoy a peaceful collection of tracks for every mood — from soulful Bollywood melodies to sleep-inducing soundscapes.
        </p>
        <div className="search-container">
          <FaSearch />
          <input
            type="text"
            placeholder="Search songs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="audio-section">
        {Object.entries(audioData).map(([category, tracks]) =>
          renderAudioList(category, tracks)
        )}
      </div>
    </div>
  );
};

export default CalmingCorner;
