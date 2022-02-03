SELECT
	"1" TIPO_REGISTRO 
	,CASE u.tipo_doc_usu
		WHEN "RUC" THEN 
			"11"
		ELSE 
			"12"
		END TIPO_IDENTICADOR_COMPRADOR
	,CASE u.tipo_doc_usu
		WHEN "RUC" THEN 
			SUBSTRING_INDEX(u.num_doc_usu,'-',1)
		ELSE 
			u.num_doc_usu 
		END NRO_IDENT_COMPRADOR
	,CONCAT(u.nombre_usu, ' ', u.apellido_usu) razon_social
	,"109" TIPO_COMPROBANTE
	,p.fecha_pago
	,"12345678" TIMBRADO
	,p.numFactura
	,c.impTotal TOTAL_10
	,0 TOTAL_5
	,0 EXENTO
	,c.impTotal total_comprobante
	,CASE p.tipo_pago
		WHEN "CRÉDITO" THEN 
		"2"
		ELSE 
		"1"
	END CONDICION_VENTA
	,"N" MONEDA_EXTRANJERA
	,"S" IMPUTA_IVA
	,"N" IMPUTA_IRE
	,"N" IMPUTA_IRP
	,"" COMPROBANTE_ASOCIADO
	,"" TIMBRADO_ASOCIADO
FROM
	usuarios u,
	comprobantes c,
	pagos_por_comprobantes ppc,
	detalle_pago dp, 
	pagos p
where
	u.id_usuario = c.id_usuario
	AND c.id_comprobante = ppc.id_comprobante
	AND ppc.id_detalle = dp.iddetalle
	AND dp.id_pago = p.id_pago
	AND p.fecha_pago BETWEEN '2021-12-01' AND '2021-12-31'