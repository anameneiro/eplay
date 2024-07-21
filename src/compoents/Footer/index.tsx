import * as S from './styles'

const AnoAtualizado = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              {' '}
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              {' '}
              AÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              {' '}
              Esportes
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              {' '}
              Simulação
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Luta"
              to="/categories#fight"
            >
              {' '}
              Luta
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rápido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar os jogos em promoção"
              to="/#on-sale"
            >
              {' '}
              Promoções
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar o que vem por ai"
              to="/#coming-soon"
            >
              {' '}
              Em breve
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{AnoAtualizado} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
