-- gets list of tenants renting for than one apartment
select T.TenantName, AT.tenantID, count(*)
From AptTenants AT
Join Tenants T on T.TenantsID equals AT.TenantsID
Having count(*) > 1
