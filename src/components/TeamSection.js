const TeamSection = () => {
    const team = [
        {
            avatar: "https://i.ibb.co/1qQtV9j/anthony-1.jpg",
            name: "Anthony Rosas",
            title: "Desarrollador Backend",
            functions: [
                "Gestión de Bases de Datos",
                "Implementación de APIs",
                "Mantenimiento del Servidor"
            ],
            linkedin: "https://www.linkedin.com/in/anthony-luis-rosas-pisco-75b53b273/",
            github: "https://github.com/AnthonyGit1"
        },
        {
            avatar: "https://i.ibb.co/f9ZMQwm/joshhh2.jpg",
            name: "Joshelyn Riveros",
            title: "Especialista en Calidad y UX",
            functions: [
                "Documentar el flujo del proyecto",
                "Validar la plataforma con usuarios",
                "Crear guías y tutoriales para el usuario"
            ],
            linkedin: "https://www.linkedin.com/in/joshelyn-riveros-pariona-380160145/",
            github: "https://github.com/joshRiveros"
        },
        {
            avatar: "https://i.ibb.co/c2xQxg7/img.png",
            name: "Jaci Lucas",
            title: "Desarrolladora Frontend",
            functions: [
                "Desarrollo de Interfaces de Usuario",
                "Optimización de Performance",
                "Colaboración en Diseño UX/UI"
            ],
            linkedin: "https://www.linkedin.com/in/jaci-lucas",
            github: "https://github.com/JaciLucasEulogio"
        }
    ];

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Conoce a nuestro equipo
                    </h3>
                    <p className="text-gray-600 mt-3">
                        Hola! Somos el equipo SeedMinds. Estudiantes de la Universidad Continental, nos apasiona la tecnología y los retos, por eso hemos creado esta plataforma. Conócenos!
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((item, idx) => (
                            <li key={idx} className="transition-transform transform hover:scale-105 relative">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                                    <div className="w-48 h-48 mb-4 relative">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center rounded-full shadow-md"
                                            alt={item.name}
                                        />
                                    </div>
                                    <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                    <p className="text-indigo-600">{item.title}</p>
                                    <ul className="list-disc list-inside text-gray-600 mt-2">
                                        {item.functions.map((func, funcIdx) => (
                                            <li key={funcIdx}>{func}</li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 flex gap-4 justify-center">
                                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors duration-150 relative">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                                                <g fill="currentColor">
                                                    <path fillRule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.309 3.296.485 5.721.239 6.322a9.215 9.215 0 012.471 6.406c0 9.164-5.613 11.181-10.944 11.782.861.743 1.63 2.208 1.63 4.453 0 3.215-.028 5.798-.028 6.579 0 .632.45 1.37 1.648 1.142a23.984 23.984 0 0012.935-10.293 23.773 23.773 0 003.153-16.172 23.834 23.834 0 00-8.134-14.351A24.086 24.086 0 0024 1z" clipRule="evenodd" />
                                                </g>
                                            </svg>
                                        </a>
                                        <a href={item.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-colors duration-150 relative">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 48 48">
                                                <g fill="currentColor">
                                                    <path d="M42.9 0H5.1C2.3 0 0 2.3 0 5.1v37.8C0 45.7 2.3 48 5.1 48h37.8c2.8 0 5.1-2.3 5.1-5.1V5.1C48 2.3 45.7 0 42.9 0zM15 41.4H9V19.1h6v22.3zm-3-25.5c-1.8 0-3.3-1.5-3.3-3.3S10.2 9.4 12 9.4s3.3 1.5 3.3 3.3-1.5 3.3-3.3 3.3zm24.5 25.5h-6v-11.4c0-2.7-.1-6.2-3.8-6.2-3.8 0-4.4 3-4.4 6v11.4h-6V19.1h6v3.1c.8-1.5 3-3.1 6-3.1 6.4 0 7.6 4.2 7.6 9.7v13.6z" />
                                                </g>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
