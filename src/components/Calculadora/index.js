import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../Services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import {
  TituloPrincipal,
  DivPrincipal,
  DivSimulacao,
  Formulario,
  Result,
} from "./styled";

export default function Calculadora() {
  const validacoesYup = yup.object().shape({
    amount: yup
      .string()
      .required("Amout deve ser um numero, maior ou igual a 1000."),
    installments: yup
      .string()
      .required("Installments deve ser um numero menor ou igual a 12."),
    mdr: yup.string().required("mdr deve ser menor ou igual a 100."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });
  const [teste, setTeste] = useState(0);
  const adicionaPost = (data) => {
    // c
    toast.promise(
      api
        .post("", data)
        .then((response) => {
          setTeste(response.data);
          toast.success("Antecipação calculada com sucesso!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Ops,erro aosimular antecipacao.Tente de novo");
        })
    );
  };

  return (
    <DivPrincipal>
      <DivSimulacao>
        <div>
          <TituloPrincipal>Simule sua Antecipação</TituloPrincipal>
        </div>
        <div className="div">
          <Formulario onSubmit={handleSubmit(adicionaPost)}>
            <div className="infos">
              <label>Informe o valor da venda *</label>
              <input
                type="number"
                name="amount"
                {...register("amount")}
              ></input>
              <>
                <span>{errors.amount?.message}</span>
              </>
            </div>
            <div className="infos">
              <label>Em quantas parcelas *</label>
              <input
                type="number"
                name="installments"
                {...register("installments")}
              ></input>
              <>
                <span>{errors.installments?.message}</span>
              </>
            </div>
            <div className="infos">
              <label>Informe o percentual de MDR *</label>
              <input type="number" name="mdr" {...register("mdr")}></input>
              <>
                <span>{errors.mdr?.message}</span>
              </>
            </div>
            <button type="submit">simulacao</button>
          </Formulario>
        </div>
      </DivSimulacao>
      <Result>
        <div>
          <h3>VOCE RECEBERÁ:</h3>
        </div>
        <div>
          <p>Amanhã: R$ {teste && teste["1"].toFixed(2)}</p>
          <p>15 dias: R$ {teste && teste["15"].toFixed(2)}</p>
          <p>30 dias: R$ {teste && teste["30"].toFixed(2)}</p>
          <p>90 dias: R$ {teste && teste["90"].toFixed(2)}</p>
        </div>
      </Result>
    </DivPrincipal>
  );
}
