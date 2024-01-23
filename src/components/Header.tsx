import Avatar from '../assets/avatar.png';

function Header() {
  return (
    <header>
      <nav>
        <div className='avatar'>
          <img src={Avatar} alt='avatar' />
        </div>
        <ul className='navigation'>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Skills</a>
          </li>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
