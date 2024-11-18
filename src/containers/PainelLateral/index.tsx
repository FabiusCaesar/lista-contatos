import { Painel } from './styles'
import FormContato from '../FormContato'
import FormBusca from '../FormBusca'

const PainelLateral = () => (
  <Painel>
    <FormBusca />
    <FormContato />
  </Painel>
)

export default PainelLateral
