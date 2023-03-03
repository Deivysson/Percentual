		// Dados do faturamento mensal por estado
		const faturamento_sp = 67836.43;
		const faturamento_rj = 36678.66;
		const faturamento_mg = 29229.88;
		const faturamento_es = 27165.48;
		const faturamento_outros = 19849.53;

		// Cálculo do total mensal
		const total_mensal = faturamento_sp + faturamento_rj + faturamento_mg + faturamento_es + faturamento_outros;

		// Cálculo do percentual de representação de cada estado
		const percentual_sp = (faturamento_sp / total_mensal) * 100;
		const percentual_rj = (faturamento_rj / total_mensal) * 100;
		const percentual_mg = (faturamento_mg / total_mensal) * 100;
		const percentual_es = (faturamento_es / total_mensal) * 100;
		const percentual_outros = (faturamento_outros / total_mensal) * 100;

		// Exibição dos resultados na tabela HTML
		document.getElementById("SpPercentual").innerHTML = percentual_sp.toFixed(2);
		document.getElementById("RjPercentual").innerHTML = percentual_rj.toFixed(2);
		document.getElementById("MgPercentual").innerHTML = percentual_mg.toFixed(2);
		document.getElementById("EsPercentual").innerHTML = percentual_es.toFixed(2);
		document.getElementById("OutrosPercentual").innerHTML = percentual_outros.toFixed(2);
		document.getElementById("total").innerHTML = total_mensal.toFixed(2);