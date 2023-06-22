import { Head } from "../../components/Head"
import { Telas } from "./Telas"

import * as S from "./styles"

const Androids = () => {
  return (

    <S.Content>
      <Head title="iPhones" />

      <S.Container>
        <Telas />
      </S.Container>

    </S.Content>

  )
}

export default Androids