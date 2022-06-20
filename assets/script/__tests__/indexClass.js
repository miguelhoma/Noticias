class NoticiasIndex {
    constructor (fecha, autor, titulo, subtitulo, contNoticia, urlImagen, alt, categoria, urlNoticia, newsID){
        this.fecha = fecha;
        this.autor = autor;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.contNoticia = contNoticia;
        this.urlImagen = urlImagen;
        this.alt = alt;
        this.categoria = categoria;
        this.urlNoticia = urlNoticia;
        this.newsID = newsID;
    }

    toHtml(){
        let html = ''
    }
}