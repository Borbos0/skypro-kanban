import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const currentDate = date.toLocaleDateString("ru-US");

  let footer = <p>Выберите срок исполнения.</p>;

  if (setDate) {
    footer = (
      <p>
        Срок исполнения:{""} {currentDate}.
      </p>
    );
  }
  return (
    <DayPicker
      locale={ru}
      mode="single"
      selected={date}
      onSelect={setDate}
      footer={footer}
    />
  );
}
