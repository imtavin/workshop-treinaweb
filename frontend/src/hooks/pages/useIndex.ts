import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [listaProfessores, setListaProfessor] = useState<Professor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSelicionado, setProfessorSelicionado] = useState<Professor | null>(null);
    const [mensagem, setMensagem] = useState('');

    useEffect(() =>{
        ApiService.get('/professores/').then((resposta) => {
            setListaProfessor(resposta.data)
        })
    }, []);

    useEffect(() => {
        limparFormulario();
    }, [professorSelicionado])

    function marcarAula(){
        if (professorSelicionado != null){
            if (validarDadosAula()){
                ApiService.post('/professores/' + professorSelicionado.id +'/aulas', {
                    nome,
                    email
                }).then( () => {
                    setProfessorSelicionado(null);
                    setMensagem('Cadastrado com sucesso!');
                }).catch((error) => {
                    setMensagem(error.response?.data.message);
                });
                }else{
                    setMensagem('Preencha os dados corretamente');
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
        setNome('');
        setEmail('');
    }

    return {
        listaProfessores,
        nome,
        setEmail,
        setNome,
        email,
        professorSelicionado,
        setProfessorSelicionado,
        marcarAula,
        mensagem, 
        setMensagem
    }

}