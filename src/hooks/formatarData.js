import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function formatarData(data) {
    return format(data, "dd 'de' MMMM 'de' yyyy 'as' HH':'mm", { locale: ptBR });
}
