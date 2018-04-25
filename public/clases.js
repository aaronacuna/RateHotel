class Usuario {
    constructor(pCedula, pPrimerNombre, pSegundoNombre, pPrimerApellido, pSegundoApellido, pEdad, pEmail, pTelefono,  pPassword, pConfirmedPassword) {

        this.cedula = pCedula;
        this.primerNombre = pPrimerNombre;
        this.segundoNombre = pSegundoNombre;
        this.primerApellido = pPrimerApellido;
        this.segundoApellido = pSegundoApellido;
        this.edad = pEdad
        this.correo = pEmail;
        this.telefono = pTelefono;
        this.password = pPassword;
        this.confirmedPassword = pConfirmedPassword;
        this.estado = 'activo';
    }

    cambiarEstado(pEstado) {
        this.estado = pEstado;
    }
    
}


class Hotel{
    constructor(pNombre, pFoto, pLatitud, pLongitud, pProvincia, pCanton, pDistrito, pDireccionExacta, pTelefonoSC, ptelefonoReservaciones, pCorreoSC, pcorreoReservaciones){

        this.nombre = pNombre;
        this.foto = pFoto;
        this.latitud = pLatitud;
        this.longitud = pLongitud;
        this.provincia = pProvincia;
        this.canton = pCanton;
        this.distrito = pDistrito;
        this.direccionExacta = pDireccionExacta
        this.telefonoSC = pTelefonoSC;
        this.telefonoReservaciones = ptelefonoReservaciones;
        this.correoSC = pCorreoSC;
        this.correoReservaciones = pcorreoReservaciones;
        this.estado = 'activo';

    }

    obtenerDatosProvCantDist(){
        let provCantDist = this.provincia + ', ' + this.canton + ', ' + this.distrito + ' ';
        return provCantDist;
    }

    cambiarEstado(pEstado) {
        this.estado = pEstado;
    }
}

