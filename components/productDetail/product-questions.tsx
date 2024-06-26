import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconExclamationCircle, IconCheck } from "@tabler/icons-react";
import { User } from "@/interfaces/user";
import style from '../navbar.module.css';

interface ProductQuestionsProps {
  handleSubmitComment: React.FormEventHandler<HTMLFormElement>;
  errorComment: string | undefined;
  successComment: string | undefined;
  currentUser: User | null;
}

const ProductQuestions: React.FC<ProductQuestionsProps> = ({
  handleSubmitComment,
  errorComment,
  successComment,
  currentUser,
}) => {
  return (
    <div className="my-6 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Preguntas</h2>
      <form onSubmit={handleSubmitComment} className="flex gap-5">
        <Input name="description" placeholder="Haz una pregunta" />
        <Button type="submit" className={`${style.primaryBtn}`}>Enviar</Button>
      </form>
      {errorComment && (
        <div className="text-white font-bold bg-red-500 rounded-lg px-2 py-1 flex gap-2">
          <IconExclamationCircle /> {errorComment}
        </div>
      )}
      {successComment && (
        <div className="text-white font-bold bg-green-500 rounded-lg px-2 py-1 flex gap-2">
          <IconCheck /> {successComment}
        </div>
      )}
    </div>
  );
};

export default ProductQuestions;
