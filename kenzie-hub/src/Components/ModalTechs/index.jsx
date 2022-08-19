import { ContainerGeneral, ContainerModal, ModalHeader } from "./styles";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaModal } from "../../validators/modalAddTech";
import { useContext } from "react";
import { TechContex } from "../../contexts/TechContext";

function ModalTechs({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaModal),
  });
  const { addTech } = useContext(TechContex);

  return (
    <ContainerGeneral>
      <ContainerModal>
        <ModalHeader>
          <h4>Cadastrar tecnologia</h4>
          <button onClick={closeModal}>
            <MdClose size={22} />
          </button>
        </ModalHeader>
        <form onSubmit={handleSubmit(addTech)}>
          <label htmlFor="cNameTech">nome</label>
          <input
            type="text"
            id="cNameTech"
            placeholder="Digite uma nova tech"
            {...register("title")}
          />
          <span>{errors.title?.message}</span>

          <label htmlFor="cSelction">Selecionar status</label>

          <select id="cSelection" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span> {errors.status?.message} </span>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </ContainerModal>
    </ContainerGeneral>
  );
}
export default ModalTechs;
