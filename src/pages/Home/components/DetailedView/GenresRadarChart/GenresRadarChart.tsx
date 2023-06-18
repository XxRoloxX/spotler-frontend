import React, { useEffect } from "react"
import { RadarChart } from "../../../../../components/Charts/RadarChart"
import global_styles from "../../../../../assets/global-paramers.style"
import { useSelectedTrack } from "../../../Home"
import { zip } from "../../../../../lib/sortingObjects"
import { RadarChartTitle } from "./GenresRadarChart.style"
import { selectRandomColor } from "../../../../../components/Charts/chartUtils"

interface GenresRadarChartProps {
    data: {
        [genre: string]: number
    }[]
}

export const GenresRadarChart = (props: GenresRadarChartProps) => {

    const { selectedTracks } = useSelectedTrack()
    const [tracksColors, setTracksColors] = React.useState<string[]>([])

    useEffect(()=>{
        setTracksColors(selectedTracks.map(()=>selectRandomColor()))
    },[selectedTracks])


    return <> 
            <RadarChartTitle>Radar chart of genres</RadarChartTitle>
                <RadarChart data={{
                    labels: props.data.length > 0 ? Object.keys(props.data[0]) : [""],
                    datasets: zip([props.data, selectedTracks, tracksColors]).map(([genres, selectedTrack,tracksColor]) => {

                        return {
                            label: selectedTrack.name,
                            data: Object.values(genres),
                            backgroundColor: tracksColor + "6F",
                            borderColor: tracksColor,
                            borderWidth: 1
                        }
                    })
                }} />    
            </>
    
  }