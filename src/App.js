import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import ReactDOM from 'react-dom';
import './App.css';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    const [nome , setNome] = useState('');
    const [dataInicial , setDataInicial] = useState('');
    const [dataFinal , setDataFinal] = useState('');
    const [infoId , setInfoId] = useState('');
    const [infoNome , setInfoNome] = useState('');
    const [labId , setLabId] = useState('');
    const [labNome , setLabNome] = useState('');
    const [cnpj , setCnpj] = useState('');
    const [observacao , setObservacao] = useState('');

    const handleNomeChange =(e)=>{
      setNome(e.target.value);
    }
    const handleDataInicialChange =(e)=>{
      setDataInicial(e.target.value);
    }
    const handleDataFinalChange =(e)=>{
      setDataFinal(e.target.value);
    }
    const handleinfoIdChange =(e)=>{
      setInfoId(e.target.value);
    }
    const handleinfoNomeChange =(e)=>{
      setInfoNome(e.target.value);
    }
    const handleLabIdChange =(e)=>{
      setLabId(e.target.value);
    }
    const handleLabNomeChange =(e)=>{
      setLabNome(e.target.value);
    }
    const handleObservacaoChange =(e)=>{
      setObservacao(e.target.value);
    }
    const handleCnpjChange =(e)=>{
      let value = e.target.value;
      value = value.replace(/\D+/g, '');
      value = value.replace(/(\d{2})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1/$2');
      value = value.replace(/(\d{4})(\d)/, '$1-$2');
      value = value.replace(/(-\d{2})\d+?$/, '$1');
      setCnpj(value);
    }
    const handleSubmit=(e)=>{
      console.log(e);
      e.preventDefault();
    }
  return (
    <div className="App">
    <header className="App-header">
    <form onSubmit={(e) => {handleSubmit(e)}}>
    <h2> Laboratório </h2>
    <h3> Formulário de inscrição </h3>
        <label >
          Nome:
        </label><br/>
        <TextField type="text" value={nome} required onChange={(e) => {handleNomeChange(e)}} /><br/>
        <label >
          Data de Início:
        </label><br/>
        <TextField type="date" value={dataInicial} required onChange={(e) => {handleDataInicialChange(e)}} /><br/>
        <label >
          Data de Término:
        </label><br/>
        <TextField type="date" value={dataFinal} required onChange={(e) => {handleDataFinalChange(e)}} /><br/>
        <label >
        infosPropriedade:
        </label><br/>
        <TextField label="Id" value={infoId} required onChange={(e) => {handleinfoIdChange(e)}} />
        <TextField label="Nome" value={infoNome} required onChange={(e) => {handleinfoNomeChange(e)}} />
        <br/>
        <label >
          CNPJ:
        </label><br/>
        <TextField type="text" value={cnpj} required onChange={(e) => {handleCnpjChange(e)}} /><br/>
        <label >
        Laboratorio:
        </label><br/>
        <TextField label="Id" value={labId} required onChange={(e) => {handleLabIdChange(e)}} />
        <TextField label="Nome" value={labNome} required onChange={(e) => {handleLabNomeChange(e)}} />
        <br/>
        <label >
        Observaçãoe:
        </label><br/>
        <TextField value={observacao} required onChange={(e) => {handleObservacaoChange(e)}} /><br/>

        <Button variant="contained" component="label">
          <TextField hidden type="submit"/>
        </Button>        

      </form>
    </header>
    </div>
  );
}
  
export default App;