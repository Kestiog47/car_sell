export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      appointments: {
        Row: {
          appointment_time: string
          brand: string
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string
          status: string
          updated_at: string
        }
        Insert: {
          appointment_time: string
          brand: string
          created_at?: string
          email: string
          id?: string
          message?: string
          name: string
          phone: string
          status?: string
          updated_at?: string
        }
        Update: {
          appointment_time?: string
          brand?: string
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']
export type Appointment = Tables<'appointments'>
export type AppointmentInsert = TablesInsert<'appointments'>
