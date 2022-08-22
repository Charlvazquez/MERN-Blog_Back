//importamos el Modelo
import BlogModel from "../models/Blog.js";
import { Sequelize } from "sequelize";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getBlog = async (req, res) => {
        try {
            const blog = await BlogModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(blog[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createBlog = async (req, res) => {
    try {
       await BlogModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const selectTitulo = async (req, res) => {
    try {
        const titulo = await BlogModel.findAll({
            where: {
              titulo: req.params.titulo
            }
          });
        res.json(titulo)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const descripcion = async (req, res) => {
    try {
        const titulo = await BlogModel.findAll({
            where: {
              descripcion: 'Categoria dedicada a Medicina'
            }
          });
        res.json(titulo)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
