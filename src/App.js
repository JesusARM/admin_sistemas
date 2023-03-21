/* eslint-disable no-unused-vars */
import "./App.css";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Message } from "primereact/message";
import PropTypes from "prop-types";

function App() {
  return (
    <div className="App">
      <div className="surface-200">
        <h2 className="text-center">Adimistracion de sistemas</h2>
        <Panel></Panel>
      </div>
    </div>
  );
}

function Panel() {
  return (
    <div className="grid justify-content-center">
      <TabInventario title="Inventario"></TabInventario>
      <TabPanel title="Soportes"></TabPanel>
      <TabPanel title="Mantenimientos"></TabPanel>
      <TabPanel title="Actividades"></TabPanel>
    </div>
  );
}

TabPanel.propTypes = {
  title: PropTypes.string.isRequired,
};
function TabPanel(props) {
  return (
    <div className="col-5 ">
      <Card title={props.title}>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}

TabInventario.propTypes = {
  title: PropTypes.string.isRequired,
};
function TabInventario(props) {
  const footer = (
    <div className="flex justify-content-end gap-2">
      <Button
        icon="pi pi-plus"
        rounded
        text
        raised
        severity="success"
        label="Añadir equipo"
      />
      <Button
        icon="pi pi-user"
        rounded
        text
        raised
        severity="info"
        label="Administrar"
      />
    </div>
  );
  //!Añadir conteo de cuantos equipos tiene y de que tipo
  const Contador = (
    <div className="m-1">
      <Tag
        className="mr-2"
        icon="pi pi-briefcase"
        severity="info"
        value="53"
      ></Tag>
      Lorem Ipsum
    </div>
  );

  const EnUso = (
    <div className="col-6">
      Equipo en uso
      {Contador}
      {Contador}
      {Contador}
    </div>
  );

  const NoUso = (
    <div className="col-6">
      Equipo en inventario
      {Contador}
      {Contador}
    </div>
  );

  const Dañados = (
    <div className="col-12">
      <Message severity="warn" text="Hubieron 3 equipos dañados este mes" />
    </div>
  );

  const ResumenInventario = (
    <div className="surface-200 grid">
      {EnUso}
      {NoUso}
      {Dañados}
    </div>
  );

  return (
    <div className="col-5 ">
      <Card title={props.title} footer={footer}>
        {ResumenInventario}
      </Card>
    </div>
  );
}

export default App;
