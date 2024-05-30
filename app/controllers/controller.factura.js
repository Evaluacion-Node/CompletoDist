import {pool} from "../config/mysql.db.js";

export const mostrarFactura = async(req,res)=>{
    const id = req.params['id'];
    try {
        const respuesta = await pool.query(`CALL SP_MOSTRAR_USUARIO(${id});`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const listarFactura = async(req,res)=>{
    try {
        const respuesta = await pool.query(`CALL SP_LISTAR_USUARIO();`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const crearFactura = async(req,res)=>{
    const producto = req.body.producto;
    const precio = req.body.precio;
    const fecha = req.body.fecha;
    try {
        const respuesta = await pool.query(`CALL SP_CREAR_USUARIO('${producto}','${precio}','${fecha}');`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const modificarFactura = async(req,res)=>{
    const producto = req.body.producto;
    const precio = req.body.precio;
    const fecha = req.body.fecha;
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL SP_MODIFICAR_USUARIO('${producto}','${precio}','${fecha}','${id}');`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};
export const eliminarFactura = async(req,res)=>{
    const id = req.body.id;
    try {
        const respuesta = await pool.query(`CALL SP_ELIMINAR_USUARIO(${id});`);
        res.json({"respuesta":respuesta});
    } catch (error) {
        res.json({"error":error});
    }
};