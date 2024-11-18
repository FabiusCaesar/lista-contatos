import * as S from './styles'

const FormBusca = () => (
  <>
    <h2>Pesquisa</h2>
    <S.Form>
      <label>Busca por nome:</label>
      <input type="text" placeholder="Digite o nome" />
      <label>Busca por email:</label>
      <input type="email" placeholder="Digite o e-mail" />
      <label>Busca por telefone:</label>
      <input type="tel" placeholder="Digite o telefone" />
      <button>Pesquisar</button>
    </S.Form>
  </>
)

export default FormBusca
