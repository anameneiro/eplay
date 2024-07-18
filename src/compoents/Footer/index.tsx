import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const AnoAtualizado = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              {' '}
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              {' '}
              AÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              {' '}
              Esportes
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              {' '}
              Simulação
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              {' '}
              Luta
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rápido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar os jogos em promoção"
              to="/#on-sale"
            >
              {' '}
              Promoções
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar o que vem por ai"
              to="/#coming-soon"
            >
              {' '}
              Em breve
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{AnoAtualizado} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
