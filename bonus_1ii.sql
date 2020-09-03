-- listing buildings and getting number of open requests
select * from building b
Join apartments a on A.buildingID equals b.buildingID
Join Requests r on r.AptID equals a.AptID
where r.Status = 'open'