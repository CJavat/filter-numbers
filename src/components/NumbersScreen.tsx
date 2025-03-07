import { useState, type FormEvent } from "react";

export const NumbersScreen = () => {
  const [result, setResult] = useState<string[]>([]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const form = evt.currentTarget as HTMLFormElement;
    const allNumbers = (
      form.elements.namedItem("allNumbers") as HTMLTextAreaElement
    )?.value;
    const badNumbers = (
      form.elements.namedItem("badNumbers") as HTMLTextAreaElement
    )?.value;

    let allNumbersArray = allNumbers.split("\n");
    let badNumbersArray = badNumbers.split("\n");
    badNumbersArray = badNumbersArray.map((num) => num.replace(",", ""));
    allNumbersArray = allNumbersArray.map((num) => num.replace(",", ""));

    const filteredNumbers = allNumbersArray.filter(
      (num) => !badNumbersArray.includes(num)
    );

    console.log(filteredNumbers);
    setResult(filteredNumbers);
  };

  return (
    <div className="flex justify-evenly items-center">
      <form
        action=""
        className="space-x-3 py-4 flex justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <textarea
          name="allNumbers"
          id=""
          className="rounded-md border border-indigo-500 w-64 h-96 overflow-y-scroll resize-none p-2"
          placeholder="Lista completa de números"
        ></textarea>

        <textarea
          name="badNumbers"
          id=""
          className="rounded-md border border-indigo-500 w-64 h-96 overflow-y-scroll resize-none p-2"
          placeholder="Los números que quieres eliminar"
        ></textarea>

        <div className="border border-indigo-500 w-64 h-96 overflow-y-scroll inline-block p-2">
          <p>Resultado:</p>
          <p>
            {result.map((number, index) => (
              <span className="text-indigo-500 block" key={number + index}>
                {number}
              </span>
            ))}
          </p>
        </div>

        <button
          type="submit"
          className="p-2 border border-indigo-500 rounded-md hover:bg-indigo-500 cursor-pointer hover:text-white self-end"
        >
          Filtar números
        </button>
      </form>
    </div>
  );
};
