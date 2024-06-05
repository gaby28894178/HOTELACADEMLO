class Empleado:
    # Variable de clase: solo existe una copia que se comparte entre todas las instancias
    ID = 0
    
    def __init__(self, nombre, sueldo):
        # Variable de instancia
        self.nombre = nombre
        self.sueldo = sueldo
        Empleado.ID += 1  # Incrementa el contador de ID cada vez que se crea un nuevo empleado
        self.id = Empleado.ID  # Asigna el ID actual a esta instancia
        
    def mostrar_datos(self):
        return f'ID: {self.id}, Nombre: {self.nombre}, Sueldo: ${self.sueldo}'
    
    def __str__(self):
        return self.mostrar_datos()
    
empleado2 = Empleado("Laura", 22)
print(empleado2)
