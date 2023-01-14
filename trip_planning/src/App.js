/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const style = css({
  margin: 10,
  padding: 10,
  backgroundColor: '#eee',
})
function App() {
  return (
    <div css={style} >
      <p> Hello World</p>
    </div>
  );
}

export default App;
