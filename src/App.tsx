import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components'


const Div = styled.div`
  width: 100vw;
  height: 100vh;
  display:flex;
  gap: 2%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Item = styled.div`
  width:80%;
  height: 10%;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0.5%;
`
const Button = styled.button`
  width: fit-content;
  height: 35%;
  cursor:pointer;
  `


const Grid = styled.div<{ cols?: number, rows?: number }>`
  width: 100%;
  display:grid;
  grid-template-columns: repeat(${props => props?.cols ? props?.cols : 1}, 1fr);
  grid-template-rows: repeat(${props => props?.rows ? props?.rows : 1}, 50px);
  gap:1%;
  `


const DialogStyles = styled.div<{ open: boolean }>`
  display:flex;
  position: absolute;
  z-index: 10000;
  visibility: ${props => props?.open ? 'visible' : 'hidden'};
  opacity:${props => props?.open ? 1 : 0} ;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  transition: visibility 0.3s linear, opacity 0.3s linear;
  overflow: auto;
`;

const DialogTitle = styled.div`
  width: 100%;
  height: 8%;
  text-align:center;
  text-transform: uppercase;
  display: flex;
  align-items:center;
  justify-content: center;
  font-size: 1.5rem;  
`

const DialogBody = styled.div`
  width: 100%;
  height: 92%;
`

const DialogWindow = styled.div<{ wd?: number, hg?: number }>`
  position:relative;
  width: ${props => props.wd ? props.wd : 80}vw;
  height: ${props => props.hg ? props.hg : 80}vh;
  z-index: 100001;
  background: #f0f0f0;
  border-radius: 5px;
  overflow: auto;
`

const DialogActions = styled.div`
  position:absolute;
  bottom: 0;
  width: 100%;
  height: fit-content;
  display:flex;
  justify-content: center;
  align-items: center;

`

const Dialog = ({ title, open, wd, hg, handleClose, children }: PropsWithChildren<any>) => {
  return (
    <DialogStyles open={open} >
      <DialogWindow wd={wd} hg={hg}>
        <DialogTitle><span>{title}</span></DialogTitle>
        <DialogBody>
          {children}
        </DialogBody>
        <DialogActions>
          <Button onClick={handleClose}>COMFIRMAR</Button>
        </DialogActions>
      </DialogWindow>
    </DialogStyles>
  )
}



const GridItem = styled(Grid) <{ rs?: number, cs?: number, align?: 'center' | 'start' | 'end', justify?: 'center' | 'start' | 'end' }>`
  grid-row: ${props => props.rs ? 'span ' + props.rs : ''} ;
  grid-column: span ${props => props.cs ? props.cs : 1};
  align-items: ${props => props.align ? props.align : ''};
  justify-items: ${props => props.justify ? props.justify : ''};
`

const ItemDePara = styled.div`
  width: 100%;
  height: 100%;
  background: gray;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  justify-content: space-around;
`

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  height: 50%;
  width: 5%;
`


function App() {

  const [dialog, setDialog] = useState(false)

  return (
    <>
      <Dialog handleClose={() => setDialog(false)} open={dialog} title={'De-Para'} >
        <Grid cols={12}>
          <GridItem cs={12} justify='center'>
            <span>HDL LOGISTICA HOSPITALAR - 11.872.656/001-10</span>
          </GridItem>
          <GridItem cs={6} justify={'center'} align={'center'} style={{ background: 'gray', opacity: '0.5' }}>Ordem de Compras</GridItem>
          <GridItem cs={6} justify={'center'} align={'center'} style={{ background: 'gray', opacity: '0.5' }}>Nota fiscal</GridItem>
          <GridItem cs={12} style={{ height: '25px' }}>Marque as opções que correspondem/estão corretas:</GridItem>
          <GridItem cs={12} cols={12} justify={'center'}>
            <GridItem cs={6} align='center' justify='center'>
              <ItemDePara>
                <span>Data de Emissão : 2010</span>
              </ItemDePara>
            </GridItem>
            <GridItem cs={6}>
              <ItemDePara>
                <span>Data de Emissão : 2010</span>
                <CheckBox />
              </ItemDePara>
            </GridItem>
          </GridItem>
        </Grid>
      </Dialog>
      <Div>
        <Item>
          <Button onClick={() => setDialog(true)}> X </Button>
        </Item>
      </Div>
    </>
  );
}

export default App;
