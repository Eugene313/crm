<template>
    <div id="dashboard">
        <div class="card-wrap">
          <v-card
                  class="mt-4 mx-auto md5 lg12  mr-20"
                  max-width="550"
                  width="100%"
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
          <v-card
                  class="mt-4 mx-auto"
                  max-width="550"
                  width="100%"
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
          <v-card
                  class="mt-4 mx-auto"
                  max-width="550"
                  width="100%">
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
        </div>
        </div>
    </div>
</template>

<script>
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
      ]
    })
  }
</script>

<style>
  .card-wrap {
    display: flex;
    margin-bottom: 50px;
  }
  v-card {
    margin: 0 30px;
  }
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>