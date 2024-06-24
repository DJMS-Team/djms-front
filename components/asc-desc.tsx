import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { AiOutlineCaretDown } from 'react-icons/ai';

const ascDesc = [ {type: 'Ascendente', id: '1'}, {type: 'Descendente', id: '2'}];

interface AscDescProps {
    title: string;
    handleSort: (criteria: string) => void;
  }  

export const AscDesc: React.FC<AscDescProps> = ({ title, handleSort }) => {
    return (
        <DropdownMenu>
                  <DropdownMenuTrigger className="flex gap-2 items-center">
                    <p>{title}</p>
                    <AiOutlineCaretDown size={12} className="mt-[1px]" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="px-4 bg-[#2A2A5A] text-white border-none">
                    {ascDesc.map((opt) => (
                      <DropdownMenuItem onClick={() => handleSort('price'+opt.type)} key={opt.id}>
                        {opt.type}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
        </DropdownMenu>
    )
}