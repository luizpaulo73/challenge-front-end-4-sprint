type TipoRede = {
    id: number;
    nome: string;
    imagem: string;
    url: string;
}

export const listaRedes: TipoRede[] = [
    {
        id: 1,
        nome: 'Whatsapp',
        imagem: "/img/whatsapp.png",
        url: "https://api.whatsapp.com/send?1=pt_BR&phone=551130039303&text=Oi,%20Porto%20Seguro%20!"
    },
    {
        id: 2,
        nome: 'Instagram',
        imagem: "/img/instagram.png",
        url: "https://www.instagram.com/porto"
    },
    {
        id: 3,
        nome: 'Facebook',
        imagem: "/img/facebook.png",
        url: "https://www.facebook.com/porto"
    },
    {
        id: 4,
        nome: 'X',
        imagem: "/img/x.png",
        url: "https://x.com/portoseguro"
    }
]