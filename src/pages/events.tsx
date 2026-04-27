import { useState } from "react";

// ══════════════════════════════════════════════════════════════
//  Navyaan Foundation — All Events Page
//  Route: /events
//  To add a new event: add an object to the EVENTS array below
// ══════════════════════════════════════════════════════════════

const B = {
  navy:  "#002D62",
  teal:  "#00796B",
  gold:  "#C9A032",
  pink:  "#C2185B",
  ivory: "#F8F7F3",
  coral: "#FF6F61",
};

// ── INTERFACES ────────────────────────────────────────────────
interface Photo     { img: string; link: string; }
interface MediaClip { paper: string; color: string; img: string; link: string; }
interface Video     { title: string; platform: string; url: string; color: string; }
interface Stat      { num: string; label: string; }

interface NavyaanEvent {
  id: number;
  title: string;
  subtitle?: string;
  date: string;
  displayDate: string;
  venue: string;
  description: string;
  tag: string;
  tagColor: string;
  coverImg?: string;
  stats: Stat[];
  photos: Photo[];
  media: MediaClip[];
  videos: Video[];
  status: "completed" | "upcoming" | "placeholder";
}

// ══════════════════════════════════════════════════════════════
//  EVENTS DATA — Add new events here at the TOP of the array
// ══════════════════════════════════════════════════════════════
const EVENTS: NavyaanEvent[] = [

  // ── EVENT 1: AURA 2026 (Most Recent) ─────────────────────
  {
    id: 1,
    title: "AURA – The Power of She",
    subtitle: "Women's Empowerment Award Ceremony",
    date: "2026-03-28",
    displayDate: "28th March 2026",
    venue: "Constitution Club of Rajasthan, Jaipur",
    description: "Navyaan Foundation organised AURA – The Power of She, a prestigious Women's Empowerment Award Ceremony celebrating 50 inspiring women achievers of Rajasthan across Culture, Leadership & Social Impact. The event was graced by Hon'ble Ministers, MLAs, dignitaries, doctors from Mahatma Gandhi Hospital, and fashion designer Aayush Soni.",
    tag: "Women's Empowerment",
    tagColor: B.pink,
    coverImg: "https://i.ibb.co/chM3GyVT/038A7993.jpg",
    stats: [
      { num:"50+",  label:"Women Honoured" },
      { num:"19+",  label:"Print Media"    },
      { num:"7",    label:"TV & Video"     },
      { num:"500+", label:"Attendees"      },
    ],
    photos: [
      { img:"https://i.ibb.co/chM3GyVT/038A7993.jpg",                                  link:"https://ibb.co/5ht4N1wc"  },
      { img:"https://i.ibb.co/FLrDh10K/Whats-App-Image-2026-04-12-at-13-54-51-1.jpg",  link:"https://ibb.co/fzgxXWn2"  },
      { img:"https://i.ibb.co/NhsNNL8/Whats-App-Image-2026-04-12-at-13-54-49.jpg",     link:"https://ibb.co/MTs11RY"   },
      { img:"https://i.ibb.co/27HzhtTY/Whats-App-Image-2026-04-12-at-13-54-48.jpg",     link:"https://ibb.co/GvNZp2q3"  },
      { img:"https://i.ibb.co/PZF4b4rs/Whats-App-Image-2026-04-12-at-13-54-48-1.jpg",   link:"https://ibb.co/LzY6q60D"  },
      { img:"https://i.ibb.co/MyVvf63Y/Whats-App-Image-2026-04-12-at-13-54-47-1.jpg",   link:"https://ibb.co/vCPFhYK7"  },
      { img:"https://i.ibb.co/DD15GYZm/Whats-App-Image-2026-04-12-at-13-54-46.jpg",     link:"https://ibb.co/TBwmK1sJ"  },
      { img:"https://i.ibb.co/Z117FT3M/Whats-App-Image-2026-04-12-at-13-54-46-1.jpg",   link:"https://ibb.co/gFFhfgGR"  },
      { img:"https://i.ibb.co/KxDn6wWK/Whats-App-Image-2026-04-12-at-13-54-41.jpg",     link:"https://ibb.co/m50pJ84N"  },
      { img:"https://i.ibb.co/sdb5X6bM/038A8120.jpg",                                    link:"https://ibb.co/tTQZ1xQW"  },
      { img:"https://i.ibb.co/kVY3X3P3/038A8101.jpg",                                    link:"https://ibb.co/8nFz9zQz"  },
      { img:"https://i.ibb.co/tM3RZcK0/038A8047.jpg",                                    link:"https://ibb.co/N67R1pC0"  },
    ],
    media: [
      { paper:"Dainik Bhaskar",        color:"#E53935", link:"https://ibb.co/qMNzKjm2", img:"https://i.ibb.co/qMNzKjm2/Whats-App-Image-2026-03-29-at-09-14-54.jpg" },
      { paper:"Rajasthan Patrika",     color:"#1565C0", link:"https://ibb.co/9HXfXq45", img:"https://i.ibb.co/9HXfXq45/Whats-App-Image-2026-03-29-at-09-14-55.jpg" },
      { paper:"Punjab Kesari",         color:"#F57F17", link:"https://ibb.co/rRPQMXBj", img:"https://i.ibb.co/rRPQMXBj/Whats-App-Image-2026-03-29-at-09-23-40.jpg" },
      { paper:"Dainik Navjyoti",       color:"#2E7D32", link:"https://ibb.co/Kn6v2M9",  img:"https://i.ibb.co/Kn6v2M9/Whats-App-Image-2026-03-29-at-09-24-37.jpg"  },
      { paper:"Rashtradoot",           color:"#6A1B9A", link:"https://ibb.co/5xLz0gzd", img:"https://i.ibb.co/5xLz0gzd/Whats-App-Image-2026-03-29-at-09-25-40.jpg" },
      { paper:"Morning News",          color:"#00838F", link:"https://ibb.co/v4CwNRRF", img:"https://i.ibb.co/v4CwNRRF/Whats-App-Image-2026-03-29-at-09-28-10.jpg" },
      { paper:"Business Remedies",     color:"#00796B", link:"https://ibb.co/FbhCYkrg", img:"https://i.ibb.co/FbhCYkrg/Whats-App-Image-2026-03-29-at-09-30-58.jpg" },
      { paper:"Satta Jagat",           color:"#C62828", link:"https://ibb.co/JwNbnmDP", img:"https://i.ibb.co/JwNbnmDP/Whats-App-Image-2026-03-29-at-09-31-32.jpg" },
      { paper:"Kamyab Kalam",          color:"#4527A0", link:"https://ibb.co/c7SP54b",  img:"https://i.ibb.co/c7SP54b/Whats-App-Image-2026-03-29-at-09-32-43.jpg"  },
      { paper:"Mridul Patrika",        color:"#BF360C", link:"https://ibb.co/Txk891xT", img:"https://i.ibb.co/Txk891xT/Whats-App-Image-2026-03-29-at-09-33-09.jpg" },
      { paper:"Dainik Tasdeek",        color:"#37474F", link:"https://ibb.co/F4y58CDS", img:"https://i.ibb.co/F4y58CDS/Whats-App-Image-2026-03-29-at-09-33-44.jpg" },
      { paper:"Sach Bedhrak",          color:"#1B5E20", link:"https://ibb.co/5xnCyXB2", img:"https://i.ibb.co/5xnCyXB2/Whats-App-Image-2026-03-29-at-09-37-14.jpg" },
      { paper:"Mahanagar Times",       color:"#880E4F", link:"https://ibb.co/zVtRXzpb", img:"https://i.ibb.co/zVtRXzpb/Whats-App-Image-2026-03-29-at-09-37-15.jpg" },
      { paper:"Hindustan Express",     color:"#0277BD", link:"https://ibb.co/shgZHGK",  img:"https://i.ibb.co/shgZHGK/Whats-App-Image-2026-03-29-at-09-38-33.jpg"  },
      { paper:"Samachaar Jagat",       color:"#558B2F", link:"https://ibb.co/ccPBZJS1", img:"https://i.ibb.co/ccPBZJS1/Whats-App-Image-2026-03-29-at-09-40-45-1.jpg"},
      { paper:"Dainik Bhaskar (City)", color:"#E53935", link:"https://ibb.co/d4Vhsj8p", img:"https://i.ibb.co/d4Vhsj8p/Whats-App-Image-2026-03-29-at-09-40-45.jpg" },
      { paper:"Hello Rajasthan",       color:"#AD1457", link:"https://ibb.co/zV8rrT21", img:"https://i.ibb.co/zV8rrT21/Whats-App-Image-2026-03-29-at-09-42-09.jpg" },
      { paper:"Khas Khabar",           color:"#00695C", link:"https://ibb.co/84Syp0zY", img:"https://i.ibb.co/84Syp0zY/Whats-App-Image-2026-03-29-at-11-04-05.jpg" },
      { paper:"Media Coverage",        color:"#37474F", link:"https://ibb.co/d06vfMkx", img:"https://i.ibb.co/d06vfMkx/Whats-App-Image-2026-03-30-at-11-08-56.jpg" },
    ],
    videos: [
      { title:"ऑरा-द पावर ऑफ शी में 50 प्रेरणादायी महिलाओं का सम्मान", platform:"YouTube",  url:"https://youtu.be/Hco-Ztk7-nI",                 color:"#FF0000" },
      { title:"AURA – The Power of She | Full Event Coverage",             platform:"YouTube",  url:"https://www.youtube.com/watch?v=3yuMEtumGUQ",  color:"#FF0000" },
      { title:"Jaipur News | ऑरा-द पावर ऑफ शी | JAN TV",                 platform:"JAN TV",   url:"https://youtu.be/1mpd-lwfo9o",                 color:"#E53935" },
      { title:"AURA 2026 Event Highlights",                                platform:"YouTube",  url:"https://share.google/G287ZuwPDdD2rkmDQ",       color:"#FF0000" },
      { title:"AURA – The Power of She | Official Event Video",            platform:"Facebook", url:"https://www.facebook.com/share/v/18EcLp3VVx/", color:"#1877F2" },
      { title:"Award Ceremony Highlights",                                 platform:"Facebook", url:"https://www.facebook.com/share/v/1DafxqVCeu/", color:"#1877F2" },
      { title:"50 Women Achievers Celebration",                            platform:"Facebook", url:"https://www.facebook.com/share/v/1DDzK4bZZQ/", color:"#1877F2" },
    ],
    status: "completed",
  },

  // ── EVENT 2: Care That Empowers — Dec 2025 ───────────────
  {
    id: 2,
    title: "Care That Empowers",
    subtitle: "Menstrual Hygiene & First Aid Awareness",
    date: "2025-12-25",
    displayDate: "25th December 2025",
    venue: "Podar World School, Ajmer Road, Jaipur",
    description: "Podar World School in association with Navyaan Foundation & Sewa Kunj Foundation organised expert talks by doctors on Menstrual Hygiene and First Aid with interactive Q&A and quizzes. Expert speakers: Dr. Raman Mathur (Emergency Medicine, MBBS MD) and Dr. Richa Vaishnav (Obstetrics & Gynecology, MBBS DNB MRCOG).",
    tag: "Health & Awareness",
    tagColor: B.teal,
    stats: [
      { num:"2",    label:"Expert Doctors" },
      { num:"1",    label:"School"         },
    ],
    photos: [
      { img:"https://i.ibb.co/99BN6BXJ/Whats-App-Image-2026-04-26-at-11-55-17-1.jpg", link:"https://ibb.co/99BN6BXJ" },
      { img:"https://i.ibb.co/99n6rh1D/Whats-App-Image-2026-04-26-at-11-55-16.jpg",   link:"https://ibb.co/99n6rh1D" },
    ],
    media:  [],
    videos: [],
    status: "completed",
  },

  // ── EVENT 3: Wealth & Wellness Conclave — Oct 2025 ────────
  {
    id: 3,
    title: "Wealth & Wellness Conclave",
    subtitle: "Balance Your Body, Grow Your Bank",
    date: "2025-10-05",
    displayDate: "5th October 2025",
    venue: "V2 Paradise Resort, Mansarovar, Jaipur",
    description: "Navyaan Foundation, Nova Terra Foundation, CK Birla Hospitals & SUDA jointly organised the Wealth & Wellness Conclave — featuring Health Talk Show by expert doctors, Financial Literacy Workshop, gift hampers & complimentary lunch. Speakers: Dr. Mayuri Purohit (Founder, Nova Terra Federation) & Mrs. Mamta Sharma (Founder, Navyaan Foundation). Open to Students, Parents, Working Professionals & Senior Citizens.",
    tag: "Health & Wellness",
    tagColor: B.coral,
    stats: [
      { num:"4",    label:"Co-organisers" },
      { num:"11AM", label:"– 2 PM"        },
    ],
    photos: [
      { img:"https://i.ibb.co/M5c69yCM/Whats-App-Image-2026-04-26-at-13-26-00.jpg",  link:"https://ibb.co/M5c69yCM" },
      { img:"https://i.ibb.co/ccpWp5DS/Whats-App-Image-2026-04-26-at-13-27-44.jpg",  link:"https://ibb.co/ccpWp5DS" },
      { img:"https://i.ibb.co/snmKRvk/Whats-App-Image-2026-04-26-at-13-27-44-1.jpg", link:"https://ibb.co/snmKRvk"  },
    ],
    media:  [],
    videos: [],
    status: "completed",
  },

  // ── EVENT 4: Special Health Event — Sept 2025 ─────────────
  {
    id: 4,
    title: "A Special Health Event",
    subtitle: "Life Support Training & Meditation",
    date: "2025-09-20",
    displayDate: "20th September 2025",
    venue: "Mahatma Gandhi Govt. School, Jagatpura, Jaipur",
    description: "Navyaan Foundation & Natural Health Home organised a Special Health Event covering Life Support Training (essential life-saving skills), Health Awareness (seasonal diseases, lifestyle & diet) and Meditation Session. Expert: Dr. Manish Gupta — Critical Care, Pain & Palliative Care Specialist (MBBS, MD, IDCCM, FIPM, CCCP). Time: 11 AM – 12 Noon.",
    tag: "Training & Wellness",
    tagColor: B.gold,
    stats: [
      { num:"1",    label:"Expert Doctor" },
      { num:"3",    label:"Topics"        },
    ],
    photos: [
      { img:"https://i.ibb.co/GQGT2FF0/IMG-20260313-WA0014.jpg",                       link:"https://ibb.co/GQGT2FF0" },
      { img:"https://i.ibb.co/GvxYWzbj/Whats-App-Image-2026-04-26-at-11-51-38.jpg",   link:"https://ibb.co/GvxYWzbj" },
      { img:"https://i.ibb.co/qM26SQ0K/IMG-20260313-WA0011-1.jpg",                     link:"https://ibb.co/qM26SQ0K" },
    ],
    media:  [],
    videos: [],
    status: "completed",
  },
];

// ══════════════════════════════════════════════════════════════
//  SUB-COMPONENTS
// ══════════════════════════════════════════════════════════════

function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return (
    <a href={photo.link} target="_blank" rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:10, overflow:"hidden",
        boxShadow:"0 2px 12px rgba(0,0,0,0.10)", textDecoration:"none",
        background:"#fff", position:"relative",
        transition:"transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.16)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="0 2px 12px rgba(0,0,0,0.10)";}}
    >
      <img src={photo.img} alt={`Event Photo ${index+1}`} loading="lazy"
        onError={() => setFailed(true)}
        style={{width:"100%", height:180, objectFit:"cover", display:"block"}} />
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        background:"linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
        padding:"16px 10px 8px", color:"#fff",
        fontSize:11, fontWeight:600, textAlign:"right",
      }}>View →</div>
    </a>
  );
}

function MediaCard({ item }: { item: MediaClip }) {
  const [failed, setFailed] = useState(false);
  return (
    <a href={item.link} target="_blank" rel="noopener noreferrer"
      style={{
        display:"block", borderRadius:10, overflow:"hidden",
        boxShadow:"0 2px 10px rgba(0,0,0,0.08)", textDecoration:"none",
        border:"1px solid #F0E4E8", background:"#fff",
        transition:"transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 6px 20px rgba(0,0,0,0.13)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";   e.currentTarget.style.boxShadow="0 2px 10px rgba(0,0,0,0.08)";}}
    >
      <div style={{background:item.color, padding:"7px 12px", display:"flex", alignItems:"center", gap:8}}>
        <span>📰</span>
        <span style={{color:"#fff", fontSize:12, fontWeight:800}}>{item.paper}</span>
      </div>
      {!failed ? (
        <img src={item.img} alt={item.paper} loading="lazy"
          onError={() => setFailed(true)}
          style={{width:"100%", height:140, objectFit:"cover", display:"block"}} />
      ) : (
        <div style={{height:140, background:`${item.color}15`,
          display:"flex", alignItems:"center", justifyContent:"center",
          fontSize:28, flexDirection:"column" as const}}>
          <span>📰</span>
          <span style={{fontSize:10, color:item.color, fontWeight:700, marginTop:4}}>View Clip</span>
        </div>
      )}
      <div style={{padding:"6px 12px"}}>
        <p style={{fontSize:11, color:B.teal, fontWeight:700, margin:0}}>Read Coverage →</p>
      </div>
    </a>
  );
}

// ── Event Card component ───────────────────────────────────
function EventCard({ event }: { event: NavyaanEvent }) {
  const [tab, setTab]               = useState("photos");
  const [expanded, setExpanded]     = useState(event.id === 1);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showAllMedia, setShowAllMedia]   = useState(false);

  const visiblePhotos = showAllPhotos ? event.photos : event.photos.slice(0, 8);
  const visibleMedia  = showAllMedia  ? event.media  : event.media.slice(0, 4);

  const tabs = [
    { key:"photos", label:"📸 Photos",     count: event.photos.length },
    { key:"media",  label:"📰 Print Media", count: event.media.length  },
    { key:"videos", label:"📺 TV & Media",  count: event.videos.length },
  ];

  return (
    <div style={{
      background:"#fff",
      borderRadius:16,
      overflow:"hidden",
      boxShadow:"0 4px 24px rgba(0,0,0,0.08)",
      border:`1px solid rgba(0,0,0,0.07)`,
      marginBottom:24,
    }}>
      {/* Card header — always visible */}
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          display:"flex", alignItems:"center",
          gap:20, padding:"20px 24px",
          cursor:"pointer",
          background: expanded
            ? `linear-gradient(135deg, ${B.navy}, #003580)`
            : "#fff",
          transition:"background 0.3s ease",
        }}
      >
        {/* Cover image thumbnail */}
        {event.coverImg && (
          <img src={event.coverImg} alt={event.title}
            style={{
              width:64, height:64, borderRadius:10,
              objectFit:"cover", flexShrink:0,
              border: expanded ? "2px solid rgba(255,255,255,0.3)" : `2px solid ${event.tagColor}20`,
            }} />
        )}
        {!event.coverImg && (
          <div style={{
            width:64, height:64, borderRadius:10,
            background:`${event.tagColor}15`,
            display:"flex", alignItems:"center", justifyContent:"center",
            fontSize:28, flexShrink:0,
          }}>
            {event.tag.includes("Women") ? "🌸" :
             event.tag.includes("Health") ? "💚" :
             event.tag.includes("Training") ? "🏥" : "✨"}
          </div>
        )}

        {/* Title block */}
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", marginBottom:4 }}>
            <span style={{
              background: expanded ? "rgba(255,255,255,0.2)" : `${event.tagColor}18`,
              color: expanded ? "#fff" : event.tagColor,
              padding:"2px 10px", borderRadius:20,
              fontSize:10.5, fontWeight:700, letterSpacing:1,
            }}>
              {event.tag}
            </span>
            {event.status === "completed" && (
              <span style={{
                background: expanded ? "rgba(0,200,150,0.25)" : "#E8F5E9",
                color: expanded ? "#69f0ae" : "#2E7D32",
                padding:"2px 10px", borderRadius:20,
                fontSize:10, fontWeight:700,
              }}>✓ Completed</span>
            )}
          </div>
          <h3 style={{
            fontSize:"clamp(15px,2.5vw,18px)",
            fontWeight:800,
            color: expanded ? "#fff" : B.navy,
            margin:"0 0 3px",
            transition:"color 0.3s",
          }}>{event.title}</h3>
          <p style={{
            fontSize:12, margin:0,
            color: expanded ? "rgba(255,255,255,0.6)" : "#888",
          }}>
            📅 {event.displayDate} &nbsp;|&nbsp; 📍 {event.venue}
          </p>
        </div>

        {/* Stats — desktop */}
        <div style={{
          display:"flex", gap:12,
          flexShrink:0,
        }}>
          {event.stats.slice(0, 2).map(s => (
            <div key={s.label} style={{ textAlign:"center" }}>
              <div style={{
                fontSize:18, fontWeight:800,
                color: expanded ? B.gold : event.tagColor,
                lineHeight:1,
              }}>{s.num}</div>
              <div style={{
                fontSize:9.5, fontWeight:600,
                color: expanded ? "rgba(255,255,255,0.5)" : "#999",
              }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Expand arrow */}
        <div style={{
          width:32, height:32, borderRadius:"50%",
          background: expanded ? "rgba(255,255,255,0.15)" : `${event.tagColor}15`,
          display:"flex", alignItems:"center", justifyContent:"center",
          flexShrink:0, fontSize:14,
          color: expanded ? "#fff" : event.tagColor,
          transform: expanded ? "rotate(180deg)" : "rotate(0)",
          transition:"transform 0.3s ease",
        }}>▼</div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div style={{ padding:"24px" }}>

          {/* Description */}
          <p style={{
            fontSize:13.5, color:"#444",
            lineHeight:1.85, marginBottom:20,
            borderLeft:`3px solid ${event.tagColor}`,
            paddingLeft:14,
          }}>{event.description}</p>

          {/* All stats */}
          {event.stats.length > 0 && (
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:24 }}>
              {event.stats.map(s => (
                <div key={s.label} style={{
                  background: B.ivory,
                  border:`2px solid ${B.gold}`,
                  borderRadius:10, padding:"10px 18px",
                  textAlign:"center", minWidth:80,
                }}>
                  <div style={{ fontSize:22, fontWeight:800, color: event.tagColor }}>{s.num}</div>
                  <div style={{ fontSize:10.5, color:"#666", fontWeight:600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Placeholder message */}
          {event.status === "placeholder" && (
            <div style={{
              background:`${event.tagColor}08`,
              border:`1.5px dashed ${event.tagColor}40`,
              borderRadius:12, padding:"24px",
              textAlign:"center",
            }}>
              <div style={{ fontSize:32, marginBottom:8 }}>📸</div>
              <p style={{ fontSize:13.5, color:"#666", margin:0, fontWeight:600 }}>
                Photos & media coverage will be added soon!
              </p>
              <p style={{ fontSize:12, color:"#aaa", margin:"6px 0 0" }}>
                Stay tuned for updates on this event.
              </p>
            </div>
          )}

          {/* Tabs — only show if there's content */}
          {event.status === "completed" && (event.photos.length > 0 || event.media.length > 0 || event.videos.length > 0) && (
            <>
              {/* Tab buttons */}
              <div style={{ display:"flex", gap:8, marginBottom:24, flexWrap:"wrap" }}>
                {tabs.filter(t => t.count > 0).map(t => (
                  <button key={t.key}
                    onClick={() => setTab(t.key)}
                    style={{
                      padding:"8px 18px", borderRadius:24, cursor:"pointer",
                      fontSize:13, fontWeight:700, border:"2px solid",
                      transition:"all 0.2s",
                      background:  tab===t.key ? event.tagColor : "#fff",
                      color:       tab===t.key ? "#fff" : event.tagColor,
                      borderColor: tab===t.key ? event.tagColor : `${event.tagColor}40`,
                      boxShadow:   tab===t.key ? `0 4px 12px ${event.tagColor}30` : "none",
                    }}
                  >
                    {t.label}
                    <span style={{
                      marginLeft:6,
                      background: tab===t.key ? "rgba(255,255,255,0.25)" : `${event.tagColor}15`,
                      color: tab===t.key ? "#fff" : event.tagColor,
                      borderRadius:10, padding:"1px 7px",
                      fontSize:10.5, fontWeight:800,
                    }}>{t.count}</span>
                  </button>
                ))}
              </div>

              {/* Photos tab */}
              {tab === "photos" && event.photos.length > 0 && (
                <>
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",
                    gap:12,
                  }}>
                    {visiblePhotos.map((p, i) => (
                      <PhotoCard key={i} photo={p} index={i} />
                    ))}
                  </div>
                  <div style={{ textAlign:"center", marginTop:16 }}>
                    {!showAllPhotos && event.photos.length > 8 ? (
                      <button onClick={() => setShowAllPhotos(true)} style={{
                        background:`linear-gradient(135deg, ${event.tagColor}, ${event.tagColor}cc)`,
                        color:"#fff", border:"none", borderRadius:24,
                        padding:"10px 26px", fontSize:13, fontWeight:700, cursor:"pointer",
                      }}>
                        View More Photos ({event.photos.length - 8} more) ↓
                      </button>
                    ) : showAllPhotos ? (
                      <button onClick={() => setShowAllPhotos(false)} style={{
                        background:"#fff", color: event.tagColor,
                        border:`2px solid ${event.tagColor}`,
                        borderRadius:24, padding:"8px 22px",
                        fontSize:13, fontWeight:700, cursor:"pointer",
                      }}>Show Less ↑</button>
                    ) : null}
                  </div>
                </>
              )}

              {/* Media tab */}
              {tab === "media" && event.media.length > 0 && (
                <>
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",
                    gap:12,
                  }}>
                    {visibleMedia.map((m, i) => <MediaCard key={i} item={m} />)}
                  </div>
                  <div style={{ textAlign:"center", marginTop:16 }}>
                    {!showAllMedia && event.media.length > 4 ? (
                      <button onClick={() => setShowAllMedia(true)} style={{
                        background:`linear-gradient(135deg, ${event.tagColor}, ${event.tagColor}cc)`,
                        color:"#fff", border:"none", borderRadius:24,
                        padding:"10px 26px", fontSize:13, fontWeight:700, cursor:"pointer",
                      }}>
                        View All {event.media.length} Clips ↓
                      </button>
                    ) : showAllMedia ? (
                      <button onClick={() => setShowAllMedia(false)} style={{
                        background:"#fff", color: event.tagColor,
                        border:`2px solid ${event.tagColor}`,
                        borderRadius:24, padding:"8px 22px",
                        fontSize:13, fontWeight:700, cursor:"pointer",
                      }}>Show Less ↑</button>
                    ) : null}
                  </div>
                </>
              )}

              {/* Videos tab */}
              {tab === "videos" && event.videos.length > 0 && (
                <div style={{ display:"flex", flexDirection:"column" as const, gap:10, maxWidth:700 }}>
                  {event.videos.map((v, i) => (
                    <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                      style={{
                        display:"flex", alignItems:"center", gap:14,
                        background: B.ivory, borderRadius:10,
                        padding:"14px 18px", textDecoration:"none",
                        border:"1px solid #eee",
                        transition:"transform 0.2s, box-shadow 0.2s",
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.transform="translateX(4px)";e.currentTarget.style.boxShadow="0 4px 16px rgba(0,0,0,0.10)";}}
                      onMouseLeave={e=>{e.currentTarget.style.transform="translateX(0)";  e.currentTarget.style.boxShadow="none";}}
                    >
                      <div style={{
                        width:42, height:42, borderRadius:"50%",
                        background:v.color,
                        display:"flex", alignItems:"center", justifyContent:"center",
                        color:"#fff", fontSize:14, flexShrink:0, fontWeight:800,
                      }}>▶</div>
                      <div style={{ flex:1 }}>
                        <p style={{ fontSize:13, fontWeight:700, color:B.navy, margin:"0 0 2px" }}>{v.title}</p>
                        <p style={{ fontSize:11, color:"#888", margin:0 }}>{v.platform}</p>
                      </div>
                      <div style={{
                        background:`${v.color}15`, color:v.color,
                        borderRadius:8, padding:"5px 12px",
                        fontSize:11.5, fontWeight:700, flexShrink:0,
                      }}>Watch →</div>
                    </a>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  MAIN PAGE
// ══════════════════════════════════════════════════════════════
export default function Events() {
  return (
    <div style={{ background: B.ivory, minHeight:"100vh" }}>

      {/* Page Header */}
      <div style={{
        background:`linear-gradient(135deg, ${B.navy} 0%, #003580 100%)`,
        padding:"64px 20px 48px",
        textAlign:"center",
        position:"relative",
        overflow:"hidden",
      }}>
        {/* Decorative */}
        <div style={{position:"absolute",top:-60,right:-60,width:280,height:280,borderRadius:"50%",background:"rgba(201,160,50,0.07)",pointerEvents:"none"}}/>
        <div style={{position:"absolute",bottom:-40,left:-40,width:200,height:200,borderRadius:"50%",background:"rgba(0,121,107,0.10)",pointerEvents:"none"}}/>

        <span style={{
          display:"inline-block",
          background:"rgba(201,160,50,0.15)",
          border:"1px solid rgba(201,160,50,0.4)",
          color: B.gold,
          padding:"5px 18px", borderRadius:20,
          fontSize:11, fontWeight:700, letterSpacing:3,
          textTransform:"uppercase", marginBottom:14,
        }}>Navyaan Foundation</span>

        <h1 style={{
          fontSize:"clamp(28px,5vw,48px)",
          fontWeight:900, color:"#fff",
          margin:"0 0 12px", letterSpacing:1,
        }}>Our Events</h1>

        <p style={{
          fontSize:15, color:"rgba(255,255,255,0.65)",
          maxWidth:520, margin:"0 auto 0",
          lineHeight:1.7,
        }}>
          Every event is a step towards empowerment, health and community impact.
          Explore all that Navyaan Foundation has organised.
        </p>

        {/* Total count */}
        <div style={{
          display:"inline-flex", gap:24,
          background:"rgba(255,255,255,0.08)",
          border:"1px solid rgba(255,255,255,0.15)",
          borderRadius:14, padding:"12px 28px", marginTop:24,
        }}>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:24, fontWeight:900, color:B.gold }}>{EVENTS.length}</div>
            <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>Events Organised</div>
          </div>
          <div style={{ width:1, background:"rgba(255,255,255,0.15)" }}/>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:24, fontWeight:900, color:B.gold }}>2025–26</div>
            <div style={{ fontSize:10.5, color:"rgba(255,255,255,0.5)", fontWeight:600 }}>Year</div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div style={{ maxWidth:1000, margin:"0 auto", padding:"40px 20px 60px" }}>

        <p style={{
          fontSize:12, color:"#aaa", textAlign:"right",
          marginBottom:20, fontWeight:600,
        }}>
          Showing {EVENTS.length} events · Most recent first
        </p>

        {EVENTS.map(event => (
          <EventCard key={event.id} event={event} />
        ))}

        {/* Future events note */}
        <div style={{
          textAlign:"center", marginTop:16,
          padding:"20px",
          background:"rgba(0,45,98,0.04)",
          border:"1.5px dashed rgba(0,45,98,0.15)",
          borderRadius:12,
        }}>
          <p style={{ fontSize:13, color:"#999", margin:0 }}>
            🎯 More events coming soon — stay connected with Navyaan Foundation!
          </p>
        </div>

      </div>
    </div>
  );
}
