import { useState } from 'react';
import { css } from '@emotion/react';
import DotLoader from 'react-spinners/DotLoader';

const override = css`
  display: block;
  margin: 150px auto;
  border-color: #fbbd0d;
`;

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#fbbd0d');

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={input => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <DotLoader color={color} loading={loading} css={override} size={40} />
    </div>
  );
}

export default Loader;
