import { useState } from 'react'

const NAV = [
  { href: '#about', label: 'О нас' },
  { href: '#menu', label: 'Меню' },
  { href: '#gallery', label: 'Галерея' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contact', label: 'Контакты' },
]

const MENU = [
  { name: 'Эспрессо', desc: 'Плотный, с ореховой горчинкой', price: 700, tag: 'классика' },
  { name: 'Капучино', desc: 'Нежная молочная пена, корица по желанию', price: 1200, tag: 'хит' },
  { name: 'Латте', desc: 'Мягкий вкус, подаём в большой чашке', price: 1300 },
  { name: 'Флэт уайт', desc: 'Двойной эспрессо и бархатное молоко', price: 1400 },
  { name: 'Раф ванильный', desc: 'Сливки, ваниль, немного сахара', price: 1500, tag: 'новинка' },
  { name: 'Какао', desc: 'Горячий шоколад с маршмеллоу', price: 1100 },
  { name: 'Круассан', desc: 'Слоёный, со сливочным маслом', price: 900 },
  { name: 'Чизкейк', desc: 'Нью-Йорк, с ягодным соусом', price: 1600 },
]

const GALLERY = [
  { title: 'Зал у окна', from: '#f6d365', to: '#fda085' },
  { title: 'Бариста за работой', from: '#a18cd1', to: '#fbc2eb' },
  { title: 'Свежая выпечка', from: '#fccb90', to: '#d57eeb' },
  { title: 'Летняя терраса', from: '#84fab0', to: '#8fd3f4' },
  { title: 'Латте-арт', from: '#ffecd2', to: '#fcb69f' },
  { title: 'Вечер в кофейне', from: '#667eea', to: '#764ba2' },
]

const REVIEWS = [
  { name: 'Алия', text: 'Лучший капучино в городе. Прихожу каждое утро по дороге на работу.', stars: 5 },
  { name: 'Данияр', text: 'Уютно, тихо, быстрый вайфай. Отличное место для работы с ноутбуком.', stars: 5 },
  { name: 'Мария', text: 'Круассаны свежие, кофе крепкий. Жаль, что по вечерам бывает людно.', stars: 4 },
]

const FEATURES = [
  { icon: '🌱', title: 'Свежая обжарка', text: 'Зерно обжариваем сами каждую неделю небольшими партиями.' },
  { icon: '🥐', title: 'Своя выпечка', text: 'Круассаны и десерты готовим на месте с шести утра.' },
  { icon: '📶', title: 'Место для работы', text: 'Розетки у каждого стола, быстрый интернет, тихая музыка.' },
]

function Stars({ count }) {
  return <span className="stars" aria-label={`${count} из 5`}>{'★'.repeat(count)}{'☆'.repeat(5 - count)}</span>
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="logo">☕ Coffee Point</a>
        <button className="burger" aria-label="Меню" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={`nav ${open ? 'nav--open' : ''}`}>
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn--small" onClick={() => setOpen(false)}>Забронировать</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <p className="eyebrow">Кофейня в центре города</p>
        <h1>Кофе, ради которого хочется проснуться пораньше</h1>
        <p className="lead">
          Обжариваем зерно сами, печём круассаны каждое утро и помним, как вы любите свой капучино.
        </p>
        <div className="hero__actions">
          <a href="#menu" className="btn">Смотреть меню</a>
          <a href="#contact" className="btn btn--ghost">Как добраться</a>
        </div>
        <ul className="hero__stats">
          <li><strong>7:00</strong><span>открываемся</span></li>
          <li><strong>12</strong><span>сортов зерна</span></li>
          <li><strong>4.9</strong><span>рейтинг гостей</span></li>
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">О нас</h2>
        <p className="section__lead">
          Coffee Point открылся в 2021 году как маленькая стойка на восемь мест. Сегодня это два зала,
          терраса и команда из девяти человек, которая любит кофе так же сильно, как и гостей.
        </p>
        <div className="grid grid--3">
          {FEATURES.map((f) => (
            <article key={f.title} className="card">
              <div className="card__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section id="menu" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Меню</h2>
        <p className="section__lead">Цены в тенге. Любой напиток можно взять с собой.</p>
        <div className="grid grid--2">
          {MENU.map((m) => (
            <div key={m.name} className="menu-item">
              <div>
                <h3>{m.name} {m.tag && <span className="tag">{m.tag}</span>}</h3>
                <p>{m.desc}</p>
              </div>
              <div className="price">{m.price} ₸</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="container">
        <h2 className="section__title">Галерея</h2>
        <div className="grid grid--3">
          {GALLERY.map((g) => (
            <figure key={g.title} className="photo" style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}>
              <figcaption>{g.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="section section--alt">
      <div className="container">
        <h2 className="section__title">Отзывы</h2>
        <div className="grid grid--3">
          {REVIEWS.map((r) => (
            <blockquote key={r.name} className="card review">
              <Stars count={r.stars} />
              <p>«{r.text}»</p>
              <footer>— {r.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !/^[\d+() -]{6,}$/.test(form.phone)) {
      setError('Укажите имя и корректный номер телефона.')
      return
    }
    setError('')
    setSent(true)
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div>
          <h2 className="section__title">Контакты</h2>
          <ul className="contact__list">
            <li><strong>Адрес</strong>ул. Абая, 15, Алматы</li>
            <li><strong>Часы работы</strong>ежедневно 7:00–23:00</li>
            <li><strong>Телефон</strong><a href="tel:+77001234567">+7 (700) 123-45-67</a></li>
            <li><strong>Почта</strong><a href="mailto:hello@coffeepoint.kz">hello@coffeepoint.kz</a></li>
          </ul>
        </div>
        <form className="card form" onSubmit={submit} noValidate>
          <h3>Забронировать столик</h3>
          {sent ? (
            <p className="form__ok">Спасибо, {form.name}! Мы перезвоним на {form.phone}, чтобы подтвердить бронь.</p>
          ) : (
            <>
              <label>Имя<input name="name" value={form.name} onChange={update} placeholder="Как к вам обращаться" /></label>
              <label>Телефон<input name="phone" value={form.phone} onChange={update} placeholder="+7 700 000 00 00" inputMode="tel" /></label>
              <label>Гостей
                <select name="guests" value={form.guests} onChange={update}>
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </label>
              <label>Комментарий<textarea name="message" value={form.message} onChange={update} rows="3" placeholder="Время, пожелания" /></label>
              {error && <p className="form__error">{error}</p>}
              <button type="submit" className="btn">Отправить</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} Coffee Point</span>
        <nav className="footer__nav">
          {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
