import { Grid } from "react-loader-spinner"

export function Loader() {
    return <><Grid
  height="150"
  width="150"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{display: 'flex', justifyContent: 'center'}}
  visible={true}
    />
        <p style={{fontWeight: '600', fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>Loading...</p>
        </>
}

