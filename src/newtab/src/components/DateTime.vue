<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      xs12
      sm6
      md4
    >
      <v-menu
        v-model="showDate"
        :close-on-content-click="false"
        lazy
        transition="scale-transition"
        offset-y
        full-width
      >
        <v-text-field
          slot="activator"
          v-model="date"
          :label="label"
          readonly
        />
        <v-date-picker
          v-model="date"
          type="date"
        >
          <v-spacer />
          <v-btn
            flat
            @click="showDate = false"
          >
            Okay
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>

    <v-flex
      xs12
      sm6
      md4
    >
      <v-menu
        v-model="showTime"
        :close-on-content-click="false"
        lazy
        transition="scale-transition"
        offset-y
        full-width
      >
        <v-text-field
          slot="activator"
          v-model="time"
          label="Time"
          readonly
        />
        <v-time-picker
          v-model="time"
          format="24hr"
        >
          <v-spacer />
          <v-btn
            flat
            @click="showTime = false"
          >
            Okay
          </v-btn>
        </v-time-picker>
      </v-menu>
    </v-flex>

    <v-flex
      xs12
      sm6
      md4
    >
      <v-text-field
        v-model.number="seconds"
        clearable
        label="Seconds"
        type="number"
      />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import formatDate from "date-fns/format";
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

type value = number | null;

@Component
export default class DateTime extends Vue {
  @Prop({ default: "Date" })
  label!: string;

  @Prop({ required: true })
  value!: value;

  showDate = false;
  showTime = false;

  get date(): string {
    if (this.value != null) {
      return formatDate(this.value, "YYYY-MM-DD");
    } else {
      return "";
    }
  }
  set date(v: string) {
    const d = this.newDate();

    const [year, month, day] = v.split("-");
    d.setFullYear(+year, +month - 1, +day);

    this.input(+d);
  }

  get time(): string {
    if (this.value != null) {
      return formatDate(this.value, "HH:mm");
    } else {
      return "";
    }
  }
  set time(v: string) {
    const d = this.newDate();

    const [hours, minutes] = v.split(":");
    d.setHours(+hours, +minutes);

    this.input(+d);
  }

  get seconds(): number | null {
    if (this.value != null) {
      const d = new Date(this.value);
      return d.getSeconds() + d.getMilliseconds() / 1000;
    } else {
      return null;
    }
  }
  set seconds(v: number | null) {
    if (v != null) {
      const d = this.newDate();
      d.setSeconds(v);
      this.input(+d);
    } else {
      this.input(null);
    }
  }

  newDate(): Date {
    if (this.value != null) {
      return new Date(this.value);
    } else {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    }
  }

  @Emit()
  input(v: value): value {
    return v;
  }
}
</script>
