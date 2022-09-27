import { RTBox, RTCustomTable, RTGrid } from '@raintreeinc/raintree-ui'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { listLocationsDB } from '../../graphql/queries'
import { ListLocationsDBQuery } from '../../types/API'
import ReactGA from 'react-ga'

ReactGA.timing({
  category: 'JS Libraries',
  variable: 'load',
  value: 20,
})

const Locations = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [locations, setLocations] = useState<[any]>([])
  useEffect(() => {
    fetchLocations()
  }, [loading])

  const fetchLocations = async () => {
    try {
      if (loading) {
        const locationsData = (await API.graphql<Locations>({
          query: listLocationsDB,
          variables: { show: 'all' },
          authMode: 'API_KEY',
        })) as {
          data: ListLocationsDBQuery
        }
        console.log(locationsData)
        setLocations(locationsData.data.listLocationsDB.records)
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }
  return (
    <RTBox sx={{ width: '100%', height: '100%' }} margin={'20px'}>
      <RTGrid
        container
        columns={12}
        rowSpacing={'20px'}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <RTGrid item sm={12} width={'100%'}>
          <RTCustomTable
            id="message-table"
            heads={[
              {
                head1: 'Code',
                head2: 'Name',
                head3: 'Email',
                head4: 'Phone',
                head5: 'City',
              },
            ]}
            rows={locations.map((location) => {
              return {
                row1: location.code,
                row2: location.name,
                row3: location.email,
                row4: location.phone1,
                row5: location.city,
              }
            })}
            width={'100%'}
          />
        </RTGrid>
      </RTGrid>
    </RTBox>
  )
}

export default Locations
