import React, { useEffect } from "react"
import { RadarChart } from "../../../../../components/Charts/RadarChart"
import global_styles from "../../../../../assets/global-paramers.style"
import { useSelectedTrack } from "../../../Home"
import { convertDictionaryIntoSortedList, transpose2Darray, zip } from "../../../../../lib/sortingObjects"

interface GenresRadarChartProps {
    data: {
        [genre: string]: number
    }[]
}

const generateRandomColor = () => {

    const letters = '56789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 12)];
    }
    return color;

}

const COLORS = [
    "#FF3F00",
    "#FFAA00",
    "#FFD500",
    "#FF005E",
    "#FF00AA",
    "#D500FF",
    "#5E00FF",
    "#00AAFF",
    "#00D5FF",
    "#00FF5E",
    "#AAFF00",
    "#D5FF00",
    "#00FFAA",
    "#FF5E00",
    "#FF00D5",
    "#AAFFFF",
    "#FFFF5E",
    "#FFFFAA",
    "#AA00FF",
    "#FFAAFF",
]

const selectRandomColor = () => {
    return COLORS[Math.floor(Math.random() * COLORS.length)]
}

export const GenresRadarChart = (props: GenresRadarChartProps) => {

    const { selectedTracks } = useSelectedTrack()
    // const [sortedGenres, setSortedGenres] = React.useState<(string | number)[][]>([])

    // useEffect(() => {
    //     setSortedGenres(transpose2Darray(convertDictionaryIntoSortedList(props.data)))
    //     console.table(sortedGenres)
    // }, [props])



    return <RadarChart data={{
        labels: props.data.length > 0 ? Object.keys(props.data[0]) : [""],
        datasets: zip(props.data, selectedTracks).map(([genres, selectedTrack]) => {

            const randomColor = selectRandomColor()

            return {
                label: selectedTrack.name,
                data: Object.values(genres),
                backgroundColor: randomColor + "6F",
                borderColor: randomColor,
                borderWidth: 1
            }
        })
    }} />
}