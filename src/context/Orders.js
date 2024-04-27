import * as React from "react";
import { getMesas } from "../api/mesas";
import { getMenuByType } from "../api/menu-tipo";

const OrdersContext = React.createContext({
  mesas: [],
  menusBebidas: [],
  menusDesayuno: [],
  menusAlmuerzo: [],
  clienteMesa: undefined,
  ordernes: {
    almuerzo: [],
    desayuno: [],
    bebidas: [],
    mesa: undefined,
  },
  handleOrdenar: (navigate) => {},
  toggleAmount: (index, amount, type) => {},
});

export const useOrdersContext = () => {
  const context = React.useContext(OrdersContext);
  if (!context) throw Error("");
  return context;
};

const OrdersProvider = (props) => {
  const [mesas, setMesas] = React.useState([]);
  const [ordernes, setOrdernes] = React.useState();
  const [clienteMesa, setClienteMesa] = React.useState(1);
  const [menusBebidas, setMenusBebidas] = React.useState([]);
  const [menusDesayuno, setMenusDesayuno] = React.useState([]);
  const [menusAlmuerzo, setMenusAlmuerzo] = React.useState([]);

  const toggleAmount = (index, amount, type) => {
    switch (type) {
      case "Desayuno":
        setMenusDesayuno((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      case "Almuerzo":
        setMenusAlmuerzo((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      case "Bebidas":
        setMenusBebidas((current) => {
          current[index].amount = amount;
          return current;
        });
        break;
      default:
        break;
    }
  };

  const handleOrdenar = (navigate) => {
    // HERE LOGIC
    setOrdernes({ desayuno: [], bebidas: [], almuerzo: [], mesa: clienteMesa });
    navigate("Ordenes");
  };

  const loadMenusDesayuno = async () => {
    // HERE LOGIC
    const data = await getMenuByType("Desayuno");
    setMenusDesayuno(data.map((item) => ({ ...item, amount: 0 })));
  };

  const loadMenusAlmuerzo = async () => {
    // HERE LOGIC
    const data = await getMenuByType("Almuerzo");
    setMenusAlmuerzo(data.map((item) => ({ ...item, amount: 0 })));
  };

  const loadMenusBebidas = async () => {
    const data = await getMenuByType();
    setMenusBebidas(data.map((item) => ({ ...item, amount: 0 })));
  };

  const loadMesas = async () => {
    const data = await getMesas();
    setMesas(
      data.map((mesa) => ({ label: ` ${mesa.numesa}`, value: mesa._id }))
    );
  };

  React.useEffect(() => {
    loadMesas();
    loadMenusBebidas();
    loadMenusAlmuerzo();
    loadMenusDesayuno();
  }, []);

  const values = React.useMemo(
    () => ({
      mesas,
      ordernes,
      menusBebidas,
      clienteMesa,
      menusAlmuerzo,
      menusDesayuno,
      handleOrdenar,
      toggleAmount,
    }),
    [mesas, ordernes, clienteMesa, menusBebidas, menusAlmuerzo, menusDesayuno]
  );

  return (
    <OrdersContext.Provider value={values}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;
