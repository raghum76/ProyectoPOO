const { Router } = require('express');
const router= Router();
const _ =require('underscore');

const alumnos=require('..base.json');

router.get('/',(req,res)=>{
    res.json(alumnos);
    console.log(alumnos);
});

router.post('/', (req,res)=>{
    const {Nombre, Grado, Grupo, Promedio}=req.body;
    if(Nombre && Grado && Grupo && Promedio){
        const id=alumnos.length + 1;
        const newAlumnos = {...req.body,id};
        alumnos.push(newAlumnos);
        res.json(alumnos);
    }else{
        res.status(500).json({error: 'Hubo un error'});
    }
});


router.put('/:id', (req,res)=>{
    const { id }= req.params;
    const {Nombre, Grado, Grupo, Promedio}=req.body;
    _.each(alumnos, (alumnos,i)=>{
        if(alumnos.id=id){
           alumnos.Nombre=Nombre;
           alumnos.Grado=Grado;
           alumnos.Grupo=Grupo;
           alumnos.Promedio=Promedios;
        }
    });
    res.json(alumnos);

});


router.delete('/:id', (req,res)=>{
    const { id }= req.params;
    _.each(alumnos, (alumnos,i)=>{
        if(alumnos.id=id){
            alumnos.splice(i,1);
        }
        else{res.status(500).json({error='Hubo un error'});}
    });
    res.json(alumnos);
});

module.exports= router;