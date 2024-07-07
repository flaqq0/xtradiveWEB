import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
// import { Button } from 'primereact/button';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Administration_accordeonHeader = (
    <div className="flex flex-row gap-2">
        <i className="pi pi-database"></i>
        <span className="font-semibold">Administración</span>
    </div>
);

const Nosape_accordeonHeader = (
    <div className="flex flex-row gap-2">
        <i className="pi pi-database"></i>
        <span className="font-semibold">Nop Sabe</span>
    </div>
);

const Home_accordeonHeader = (
    <div className="flex flex-row gap-2">
        <i className="pi pi-home"></i>
        <span className="font-semibold">Home</span>
    </div>
);



export default function SideBarHomePage() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
            { }

            <div className="bg-blue-300 max-w-sm flex flex-col gap-12 p-5">

                <header className="flex flex-row gap-4 items-center">
                    <i className="rounded-full pi pi-user text-white bg-black p-3" style={{ fontSize: '2rem' }}></i>
                    <div className="space-y-0">
                        <span className=" font-semibold">Nombre Admin</span>
                        <p className="font-normal text-gray-500">admin@gmail.com</p>
                    </div>
                </header>

                <main className="flex flex-col gap-5">
                    <Accordion activeIndex={1}>
                        <AccordionTab header={Home_accordeonHeader}>
                            <ul>
                                <li className=" list-none text-black hover:text-white">Foros</li>
                                <li className=" list-none text-black hover:text-white">Profesores</li>
                                <li className=" list-none text-black hover:text-white">Cursos</li>
                                <li className=" list-none text-black hover:text-white">Carreras</li>
                                <li className=" list-none text-black hover:text-white">Universidades</li>
                            </ul>
                        </AccordionTab>
                    </Accordion>

                    <Accordion activeIndex={1}>
                        <AccordionTab header={Administration_accordeonHeader}>
                            <ul>
                                <li className=" list-none text-black hover:text-white">Foros</li>
                                <li className=" list-none text-black hover:text-white">Profesores</li>
                                <li className=" list-none text-black hover:text-white">Cursos</li>
                                <li className=" list-none text-black hover:text-white">Carreras</li>
                                <li className=" list-none text-black hover:text-white">Universidades</li>
                            </ul>
                        </AccordionTab>
                    </Accordion>

                    <Accordion activeIndex={1}>
                        <AccordionTab header={Nosape_accordeonHeader}>
                            <ul>
                                <li className=" list-none text-black hover:text-white">Foros</li>
                                <li className=" list-none text-black hover:text-white">Profesores</li>
                                <li className=" list-none text-black hover:text-white">Cursos</li>
                                <li className=" list-none text-black hover:text-white">Carreras</li>
                                <li className=" list-none text-black hover:text-white">Universidades</li>

                            </ul>
                        </AccordionTab>
                    </Accordion>

                    <div className="flex gap-2">
                        <i className="pi pi-cog"></i>
                        Configuracion

                    </div>

                </main>
            </div>

        </div>
    );
}
