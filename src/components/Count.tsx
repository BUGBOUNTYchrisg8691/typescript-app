import React, { ReactElement } from 'react'

interface Props {
  count: number
}

export default function Count({count}: Props): ReactElement {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

// const Count: React.FunctionComponent<Props> = (props) => {
//   return <h1>{props.count}</h1>
// }

// export default Count;