import { useState } from "react";
import ClientCard from "./components/ClientCard/ClientCard";
import ClientForm from "./components/ClientForm/ClientForm";

function App() {
  const [clients, setClients] = useState([
    {
      orderID: new Date().getTime() + "-" + Math.floor(Math.random() * 100),
      id: 1,
      fullName: "Иван Иванович Иванов",
      phone: "+7 (999) 999-99-99",
      device: "iPhone 12 64GB",
      colorDevice: "черный",
      total: "1000",
    },
    {
      orderID: new Date().getTime() + "-" + Math.floor(Math.random() * 100),
      id: 2,
      fullName: "Петров Евгений Александрович",
      phone: "+7 (953) 019-59-55",
      device: "iPhone 11 64GB",
      colorDevice: "Белый",
      total: "2000",
    },
  ]);

  const [showClientForm, setShowClientForm] = useState(false)

  return (
    <>
      <div>
        {
          showClientForm &&
          <ClientForm setShowClientForm={setShowClientForm} showClientForm={showClientForm} />
        }
        <button onClick={() => setShowClientForm(!showClientForm)} >Добавить новый заказ</button>

        <div>
          {clients.map((client) => {
            return <ClientCard key={client.id} client={client} />;
          })}
        </div>
      </div>

    </>
  );
}

export default App;
