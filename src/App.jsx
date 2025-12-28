import React, { useState, useEffect } from 'react';
import './index.css';
import redPingLogo from './assets/logo.svg';
import heroImage from './assets/hero_image.jpg';

// Components (Inline for simplicity, can be separated later)
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1000,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={redPingLogo} alt="RedPing Logo" style={{ height: '32px' }} />
          <span style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
            RedPing<span style={{ color: 'var(--color-primary)' }}>.</span>
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <div className="header-nav" style={{ display: 'flex', gap: '30px' }}>
            {[
              { name: '서비스 소개', link: '#services' },
              { name: '강점', link: '#process' },
              { name: '문의하기', link: '#contact' }
            ].map((item) => (
              <a key={item.name} href={item.link} style={{ fontSize: '15px', fontWeight: '500', color: 'var(--color-text-main)' }}>
                {item.name}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '14px', textDecoration: 'none' }}>
            무료 상담신청
          </a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section style={{
      paddingTop: '160px',
      paddingBottom: '100px',
      background: 'linear-gradient(135deg, #fff 0%, #fef5f6 100%)',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container grid-2" style={{ display: 'grid', gap: '60px', alignItems: 'center' }}>
        <div className="animate-fade-up hero-content">
          <span style={{
            display: 'inline-block',
            padding: '8px 16px',
            backgroundColor: '#fff0f2',
            color: 'var(--color-primary)',
            borderRadius: '100px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '24px'
          }}>
            No.1 중국 마케팅 파트너
          </span>
          <h1 className="title-lg" style={{ marginBottom: '24px' }}>
            <span style={{ color: 'var(--color-gold)' }}>경주</span> 방문한<br />
            중국 손님이 찾는 <br />
            <span style={{ color: 'var(--color-primary)' }}>핫플레이스</span>,<br />
            RedPing이 만듭니다.
          </h1>
          <p className="text-lead" style={{ marginBottom: '40px' }}>
            샤오홍슈, 따종디엔핑 공식 파트너.<br />
            WISE 유학생 출신 전문가들이 만드는 확실한 매출 상승을 경험하세요.
          </p>

        </div>
        <div className="hero-image-wrapper" style={{
          position: 'relative',
          height: '500px',
          backgroundColor: '#eee',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
        }}>
          {/* Placeholder for Hero Image */}
          <img
            src={heroImage}
            alt="Marketing Strategy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'SNS 체험단',
      desc: '샤오홍슈 & 따종디엔핑 인플루언서 2,000명 보유. 확실한 노출과 리뷰를 보장합니다.',
      icon: '📱'
    },
    {
      title: '공식계정 운영',
      desc: '브랜드 공식 계정 개설부터 콘텐츠 기획, 제작, 소통까지 원스톱으로 관리합니다.',
      icon: '✨'
    },
    {
      title: '라이브 커머스',
      desc: '중국 왕홍 섭외 및 라이브 방송 기획, 물류 연동까지 매출 폭발을 일으킵니다.',
      icon: '🎥'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="title-md">Our Services</h2>
          <p className="text-lead" style={{ margin: '0 auto' }}>클라이언트의 성공을 위한 최적의 마케팅 솔루션</p>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          {services.map((s, i) => (
            <div key={i} style={{
              padding: '40px',
              borderRadius: '20px',
              backgroundColor: '#fff',
              border: '1px solid #f0f0f0',
              transition: 'var(--transition-fast)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '24px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{s.title}</h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section id="process" className="section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
      <div className="container">
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 className="title-md">Why RedPing?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', marginTop: '40px' }}>
              {[
                { title: '철저한 데이터 분석', desc: '단순 감이 아닌, 따종디엔핑/샤오홍슈 데이터를 기반으로 전략을 수립합니다.' },
                { title: '현지 전문가 그룹', desc: '중국 현지 트렌드에 정통한 유학생 및 원어민 마케터가 직접 기획합니다.' },
                { title: '투명한 성과 보고', desc: '노출 수, 클릭 수, 전환율 등 모든 성과를 투명하게 리포팅합니다.' }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{
                    width: '40px', height: '40px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontWeight: 'bold', flexShrink: 0
                  }}>{idx + 1}</div>
                  <div>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="process-image" style={{ height: '600px', backgroundColor: '#ddd', borderRadius: '24px', overflow: 'hidden' }}>
            {/* Placeholder Image */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Teamwork"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxd04VL7Y2yMeEHN-DRh_UdN_IgOln7I0ViODJVSOc3I8cfJP2KCt00eeR0S5YgmUtlFg/exec';

const Contact = () => {
  const [pending, setPending] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    try {
      setPending(true);
      const data = {
        이름: form.elements['이름']?.value || '',
        연락처: form.elements['연락처']?.value || '',
      };

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      alert('접수되었습니다.');
      form.reset();
    } catch (err) {
      alert('오류가 발생했습니다.');
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="title-md">중국 마케팅, 고민하지 마세요.</h2>
        <p className="text-lead" style={{ marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }}>
          지금 바로 무료 상담을 신청하고<br />
          우리 가게 매출 상승의 기회를 잡으세요.
        </p>
        <form onSubmit={onSubmit} style={{ display: 'grid', gap: '16px', maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          <input
            name="이름"
            type="text"
            required
            placeholder="담당자 성함"
            style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', width: '100%' }}
          />
          <input
            name="연락처"
            type="text"
            required
            placeholder="연락처 (-없이 입력)"
            style={{ padding: '16px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', width: '100%' }}
          />
          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '16px', opacity: pending ? 0.7 : 1 }}
            disabled={pending}
          >
            {pending ? '전송 중...' : '무료 상담 신청하기'}
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', color: 'white', padding: '80px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <img src={redPingLogo} alt="RedPing Logo" style={{ height: '32px' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
                RedPing<span style={{ color: 'var(--color-primary)' }}>.</span>
              </span>
            </div>
            <p style={{ color: '#888', maxWidth: '300px' }}>
              경상북도 경주시 석장동 707<br />
              Tel: 010-2592-5211<br />
              Email: bamyool117@gmail.com
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Service</h4>
            <ul style={{ listStyle: 'none', color: '#888', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>체험단 마케팅</li>
              <li>운영 대행</li>
              <li>라이브 커머스</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '20px' }}>Legal</h4>
            <ul style={{ listStyle: 'none', color: '#888', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #333', marginTop: '60px', paddingTop: '40px', color: '#555', fontSize: '14px' }}>
          © 2024 RedPing. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <FloatingCTA />
      <Footer />
    </>
  );
}

const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 300px
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '9999px',
        fontWeight: 'bold',
        fontSize: '16px',
        boxShadow: '0 4px 20px rgba(230, 0, 35, 0.4)',
        zIndex: 9999,
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        opacity: visible ? 1 : 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(230, 0, 35, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(230, 0, 35, 0.4)';
      }}
    >
      <span>💬</span> 무료 상담신청
    </a>
  );
};

export default App;
