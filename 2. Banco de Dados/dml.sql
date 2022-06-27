use PETinfoA;

-- CSU:01 Inserir nome do pet
insert into tb_pet (nm_pet)
		values ("Apollo");
        

-- CSU:02 Consultar todos nomes
select id_pet as id,
		nm_pet as nome 
from tb_pet;