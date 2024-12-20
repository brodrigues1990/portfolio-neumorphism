import { styled } from '../../styles/stitches.config';
import { ThemeToggleButton } from '../ThemeToggleButton';
import * as Dialog from '@radix-ui/react-dialog';
import { Container, Flex } from '@radix-ui/themes';

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 40px',
  backgroundColor: '$background',
  position: 'sticky',
  top: 0,
  zIndex: 100,

  '@sm': {
    justifyContent: 'space-between',
  },
});

const Logo = styled('div', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '$primary',
  cursor: 'pointer',
});

const NavLinks = styled('nav', {
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  '@sm': {
    display: 'none', // Esconde o menu padrão no mobile
  },
});

const Link = styled('a', {
  textDecoration: 'none',
  fontSize: '1rem',
  color: '$text',
  cursor: 'pointer',
  transition: 'color 0.3s',

  '&:hover': {
    color: '$linkHover',
  },
});

const MenuButton = styled('button', {
  all: 'unset',
  display: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
  color: '$text',

  '@sm': {
    display: 'block', // Mostra o botão apenas no mobile
  },
});

const SideMenu = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100%',
  width: '250px',
  backgroundColor: '$background',
  boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  zIndex: 200,
});

const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (

   
      <Container >
        <Flex gap="3" justify="center" align="center" >
          <Logo onClick={() => scrollToSection('home')}>&lt;Br/&gt;</Logo>

          {/* Menu para desktop */}
          <NavLinks>
            <Link onClick={() => scrollToSection('home')}>Home</Link>
            <Link onClick={() => scrollToSection('about')}>About</Link>
            <Link onClick={() => scrollToSection('projects')}>Projects</Link>
            <Link onClick={() => scrollToSection('services')}>Services</Link>
            <Link onClick={() => scrollToSection('resume')}>Resume</Link>
            <ThemeToggleButton />
          </NavLinks>
        </Flex>
        {/* Menu para mobile */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <MenuButton>☰</MenuButton>
          </Dialog.Trigger>
          <Overlay />
          <SideMenu>
            <Link onClick={() => scrollToSection('home')}>Home</Link>
            <Link onClick={() => scrollToSection('about')}>About</Link>
            <Link onClick={() => scrollToSection('projects')}>Projects</Link>
            <Link onClick={() => scrollToSection('services')}>Services</Link>
            <Link onClick={() => scrollToSection('resume')}>Resume</Link>
            <ThemeToggleButton />
          </SideMenu>
        </Dialog.Root>
      </Container>
    
  );
};

export default Header;