/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useRef } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Message } from "primereact/message";
import { Messages } from "primereact/messages";
import { ScrollPanel } from "primereact/scrollpanel";
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
      <TabSoportes title="Soportes"></TabSoportes>
      <TabMantenimientos title="Mantenimientos"></TabMantenimientos>
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

TabMantenimientos.propTypes = {
  title: PropTypes.string.isRequired,
};
function TabMantenimientos(props) {
  const footer = (
    <div className="flex justify-content-end gap-2">
      <Button
        icon="pi pi-plus"
        rounded
        text
        raised
        severity="success"
        label="Añadir mantenimientos"
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

  const Mantenimientos = (
    <div className="col-12">
      <Message
        severity="warn"
        text="4 Mantenimientos en EXPO"
        className="m-1"
      />
      <Message
        severity="warn"
        text="2 Mantenimientos en IMPO"
        className="m-1"
      />
      <Message
        severity="warn"
        text="5 Mantenimientos en ENLACE"
        className="m-1"
      />
    </div>
  );

  const mant = (
    <div className="card">
      <ScrollPanel style={{ width: "100%", height: "150px" }}>
        <Message
          severity="warn"
          text="4 Mantenimientos en EXPO HOY"
          className="m-1 col-12"
        />
        <Message
          severity="warn"
          text="2 Mantenimientos en IMPO Mañana"
          className="m-1 col-12 red"
        />
        <Message
          severity="info"
          text="2 Mantenimientos en IMPO Esta Semana"
          className="m-1 col-12"
        />
        <Message
          severity="info"
          text="5 Mantenimientos en ENLACE Este Mes"
          className="m-1 col-12"
        />
      </ScrollPanel>
    </div>
  );

  const ResumenMantenimientos = <div className="surface-200 grid">{mant}</div>;

  return (
    <div className="col-5 ">
      <Card title={props.title} footer={footer}>
        {ResumenMantenimientos}
      </Card>
    </div>
  );
}

TabSoportes.propTypes = {
  title: PropTypes.string.isRequired,
};
function TabSoportes(props) {
  const footer = (
    <div className="flex justify-content-end gap-2">
      <Button
        icon="pi pi-plus"
        rounded
        text
        raised
        severity="success"
        label="Añadir soporte"
      />
      <Button
        icon="pi pi-user"
        rounded
        text
        raised
        severity="info"
        label="Administrar soportes"
      />
    </div>
  );

  const Sop = (
    <>
      <Message
        severity="info"
        text="Nuevo soporte en IMPO"
        className="m-1 col-12"
      />
      <Message
        severity="success"
        text="Soporte completado en RH"
        className="m-1 col-12"
      />
      <Message
        severity="info"
        text="Nuevo soporte en ENLACE"
        className="m-1 col-12"
      />
      <Message
        severity="info"
        text="Nuevo soporte en ENLACE"
        className="m-1 col-12"
      />
    </>
  );

  const Soportes = (
    <div className="col-12">
      <ScrollPanel style={{ width: "100%", height: "170px" }}>
        {Sop}
      </ScrollPanel>
    </div>
  );

  const ResumenSoportes = <div className="surface-200 grid">{Soportes}</div>;

  return (
    <div className="col-5 ">
      <Card title={props.title} footer={footer}>
        {ResumenSoportes}
      </Card>
    </div>
  );
}

TabInventario.propTypes = {
  title: PropTypes.string.isRequired,
};
function TabInventario(props) {
  //!Añadir conteo de cuantos equipos tiene y de que tipo
  const ResumenInventarioApi = [
    { Cantidad: 28, Tipo: "PC", Estado: "En uso" },
    { Cantidad: 34, Tipo: "MT", Estado: "En uso" },
    { Cantidad: 34, Tipo: "CP", Estado: "En uso" },
    { Cantidad: 2, Tipo: "PC", Estado: "Almacenado" },
    { Cantidad: 3, Tipo: "MT", Estado: "Almacenado" },
  ];

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

  const ContComputoUso = (
    <div className="m-1">
      <Tag
        className="mr-2"
        icon="pi pi-desktop"
        severity="info"
        value="28"
      ></Tag>
      Equipo de computo
    </div>
  );

  const ContMonitUso = (
    <div className="m-1">
      <Tag
        className="mr-2"
        icon="pi pi-desktop"
        severity="success"
        value="34"
      ></Tag>
      Monitores
    </div>
  );

  const ContCelUso = (
    <div className="m-1">
      <Tag
        className="mr-2"
        icon="pi pi-mobile"
        severity="warning"
        value="42"
      ></Tag>
      Celulares
    </div>
  );

  const EnUso = (
    <div className="col-6">
      Equipo en uso
      {ContComputoUso}
      {ContMonitUso}
      {ContCelUso}
    </div>
  );

  const NoUso = (
    <div className="col-6">
      Equipo en inventario
      {ContComputoUso}
      {ContMonitUso}
    </div>
  );

  const Dañados = (
    <div className="col-12">
      <Message severity="warn" text="Hubieron 3 equipos dañados este mes" className="col-12"/>
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
