import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import React from 'react';

const footer = (
    <div className="flex gap-3 mt-1">
        <Button label="Crear" severity="success"  outlined className="w-full hover:bg-green-400 hover:text-white" />
        <Button label="Cancelar" severity='danger' className="w-full" />
    </div>
);

export default function TableHeader() {
    const [visible, setVisible] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className='p-4 bg-white flex flex-row gap-5 '>
            <IconField iconPosition="left">
                <InputIcon className="pi pi-search"> </InputIcon>
                <InputText v-model="value1" placeholder="Search" />
            </IconField>


            <Button
                icon="pi pi-cloud-upload"
                label="Crear"
                onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

            <Dialog header="Registrar" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <Card ntitle="IDBI Login" subTitle="Ingrese datos" footer={footer} className=" bg-slate-200 select-none rounded-xl">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nombre">nombre</label>
                            <InputText value={email} onChange={(e) => setEmail(e.target.value)} type="text" id="nombre" aria-describedby="nombre" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="autor">autor</label>
                            <InputText value={password} onChange={(e) => setPassword(e.target.value)} type="autor" id="autor" aria-describedby="autor" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="descripción">descripción</label>
                            <InputText value={password} onChange={(e) => setPassword(e.target.value)} type="descripción" id="descripción" aria-describedby="descripción" />
                        </div>
                        
                    </div>
                </Card>
            </Dialog>

            <Button
                icon="pi pi-sync"
                label="Recargar"
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

            <Button
                icon="pi pi-download"
                label="Descargar"
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

            <Button
                icon="pi pi-trash"
                label="Eliminar"
                // onClick={() => setVisible(true)}
                className=" text-blue-600 bg-white p-0 border-none font-semibold hover:text-blue-950"
            />

        </div>
    );
}