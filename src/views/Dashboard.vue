<template>
    <div id="dashboard">
        <v-layout class="card-wrap" wrap>
          <v-flex class="pa-1 pt-5 pb-5" sm12 md6 xl3 lg3>
            <v-card
                    class="mx-auto"

            >
              <v-sheet
                      class="v-sheet--offset mx-auto"
                      color="cyan"
                      elevation="12"
                      max-width="calc(100% - 32px)">
                <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="2"
                        height="100"
                        padding="16"></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex class="pa-1 pt-5 pb-5" sm12 md6 xl3 lg3>
            <v-card
                    class="mx-auto"
            >
              <v-sheet
                      class="v-sheet--offset mx-auto"
                      color="orange"
                      elevation="12"
                      max-width="calc(100% - 32px)">
                <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="2"
                        height="100"
                        padding="16"></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex class="pa-1 pt-5 pb-5" sm12 md6 xl3 lg3>
            <v-card
                    class="mx-auto"
                    >
              <v-sheet
                      class="v-sheet--offset mx-auto"
                      color="red"
                      elevation="12"
                      max-width="calc(100% - 32px)">
                <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="2"
                        height="100"
                        padding="16"></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex class="pa-1 pt-5 pb-5" sm12 md6 xl3 lg3>
            <v-card
                    class="mx-auto"
                    >
              <v-sheet
                      class="v-sheet--offset mx-auto"
                      color="green"
                      elevation="12"
                      max-width="calc(100% - 32px)">
                <v-sparkline
                        :labels="labels"
                        :value="value"
                        color="white"
                        line-width="2"
                        height="100"
                        padding="16"></v-sparkline>
              </v-sheet>
              <v-card-text class="pt-0">
                <div class="title font-weight-light mb-2">User Registrations</div>
                <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                <v-divider class="my-2"></v-divider>
                <v-icon class="mr-2" small>
                  mdi-clock
                </v-icon>
                <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout class="mx-auto" width="100%" justify-space-between="true" wrap>
          <v-flex md2 xl3>
            <!-- <radar></radar> -->
          </v-flex>
        </v-layout>
    </div>
</template>

<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea']
  ]
  export default {
    data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm'
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240
      ],
      fill: false,
    gradient: gradients[2],
    gradients,
    padding: 0,
    radius: 5,

    width: 0.5
    })
  }
</script>

<style>
  .card-wrap {
    display: flex;
  }
  v-card {
    margin: 0 30px;
  }
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>