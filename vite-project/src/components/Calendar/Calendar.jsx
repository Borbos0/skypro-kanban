import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";

export default function Calendar({ selected, setSelected }) {
  let footer = <p>Выберите срок исполнения.</p>;

  if (selected) {
    footer = <p>Срок исполнения: {format(selected, "PP", { locale: ru })}.</p>;
  }
  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
