import style from "./infoTable.module.css"

export default function InfoTable() {
    return (
        <>
            <h2 className={style.title}> Classificação do IMC</h2>

            <table className={style.table}>
                <thead>
                    <tr>
                        <td>IMC</td>
                        <td>Classificação</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Menor que 16</td>
                        <td>Magreza grave</td>
                    </tr>
                    <tr>
                        <td>16 a menor que 17</td>
                        <td>Magreza moderada</td>
                    </tr>
                    <tr>
                        <td>17 a menor que 18,5</td>
                        <td>Magreza leve</td>
                    </tr>
                    <tr>
                        <td>18,5 a menor que 25 </td>
                        <td>Saudável</td>
                    </tr>
                    <tr>
                        <td>25 a menor que 30</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>30 a menor que 35</td>
                        <td>Obesidade Grau I</td>
                    </tr>
                    <tr>
                        <td>235 a menor que 40</td>
                        <td>Obesidade Grau II (considerada severa)</td>
                    </tr>
                    <tr>
                        <td>Maior que 40</td>
                        <td>Obesidade Grau III (considerada mórbida)</td>
                    </tr>
                </tbody>
            </table>
        </>

    )
}